import { execFileSync } from "node:child_process";
import path from "node:path";
import { copyFile, ensureDir, writeText } from "../adapters/filesystem";
import { appendLogEntry } from "./log-service";
import { formatFileTimestamp, formatTimestamp } from "../utils/date";
import type { ProjectPaths } from "../utils/paths";
import { slugify } from "../utils/slug";

interface CaptureCommonOptions {
  title: string;
  tags?: string[];
  url?: string;
}

interface CapturePasteOptions extends CaptureCommonOptions {
  content?: string;
}

interface CaptureNoteOptions extends CaptureCommonOptions {
  content?: string;
}

interface CaptureFileOptions extends CaptureCommonOptions {
  filePath: string;
}

export async function capturePaste(paths: ProjectPaths, options: CapturePasteOptions): Promise<string> {
  const content = (options.content ?? (await readStdin()) ?? readClipboard()).trim();
  if (!content) {
    throw new Error("No content provided. Pass --content, pipe text to stdin, or copy text to the clipboard first.");
  }

  const filePath = path.join(paths.inboxPasteDir, `${formatFileTimestamp()}-${slugify(options.title || "capture")}.md`);
  const body = renderInboxMarkdown({
    title: options.title || "Pasted Capture",
    kind: "paste",
    tags: options.tags ?? [],
    url: options.url,
    content
  });

  await writeText(filePath, body);
  await appendLogEntry(paths.logFile, {
    event: "capture",
    title: options.title || "Pasted Capture",
    detail: `Stored pasted content in ${path.relative(paths.vaultDir, filePath)}.`
  });
  return filePath;
}

export async function captureNote(paths: ProjectPaths, options: CaptureNoteOptions): Promise<string> {
  const content = (options.content ?? (await readStdin()) ?? "").trim();
  const filePath = path.join(paths.inboxNotesDir, `${formatFileTimestamp()}-${slugify(options.title || "note")}.md`);
  const body = renderInboxMarkdown({
    title: options.title || "Quick Note",
    kind: "note",
    tags: options.tags ?? [],
    url: options.url,
    content: content || "Add your note here."
  });

  await writeText(filePath, body);
  await appendLogEntry(paths.logFile, {
    event: "capture",
    title: options.title || "Quick Note",
    detail: `Stored note in ${path.relative(paths.vaultDir, filePath)}.`
  });
  return filePath;
}

export async function captureFile(paths: ProjectPaths, options: CaptureFileOptions): Promise<{ filePath: string; metadataPath: string }> {
  const extension = path.extname(options.filePath);
  const fileName = `${formatFileTimestamp()}-${slugify(options.title || path.basename(options.filePath, extension))}${extension}`;
  const destinationPath = path.join(paths.inboxFilesDir, fileName);
  await ensureDir(paths.inboxFilesDir);
  await copyFile(path.resolve(options.filePath), destinationPath);

  const metadataPath = `${destinationPath}.meta.md`;
  const metadata = renderInboxFileMetadata({
    title: options.title || path.basename(options.filePath, extension),
    tags: options.tags ?? [],
    url: options.url,
    originalPath: path.resolve(options.filePath)
  });
  await writeText(metadataPath, metadata);
  await appendLogEntry(paths.logFile, {
    event: "capture",
    title: options.title || path.basename(options.filePath),
    detail: `Stored file capture in ${path.relative(paths.vaultDir, destinationPath)}.`
  });
  return { filePath: destinationPath, metadataPath };
}

function renderInboxMarkdown(input: { title: string; kind: "paste" | "note"; tags: string[]; url?: string; content: string }): string {
  return [
    "---",
    `title: ${input.title}`,
    `kind: ${input.kind}`,
    `captured_at: ${formatTimestamp()}`,
    `tags: [${input.tags.join(", ")}]`,
    `source_url: ${input.url ?? ""}`,
    "status: inbox",
    "---",
    "",
    `# ${input.title}`,
    "",
    input.content,
    ""
  ].join("\n");
}

function renderInboxFileMetadata(input: { title: string; tags: string[]; url?: string; originalPath: string }): string {
  return [
    "---",
    `title: ${input.title}`,
    "kind: file",
    `captured_at: ${formatTimestamp()}`,
    `tags: [${input.tags.join(", ")}]`,
    `source_url: ${input.url ?? ""}`,
    `original_path: ${input.originalPath}`,
    "status: inbox",
    "---",
    "",
    `# ${input.title}`,
    "",
    "## Notes",
    "Add notes about this file before processing if needed.",
    ""
  ].join("\n");
}

async function readStdin(): Promise<string | undefined> {
  if (process.stdin.isTTY) {
    return undefined;
  }

  return new Promise((resolve, reject) => {
    let data = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (chunk) => {
      data += chunk;
    });
    process.stdin.on("end", () => resolve(data));
    process.stdin.on("error", reject);
  });
}

function readClipboard(): string {
  try {
    return execFileSync("pbpaste", { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}
