import path from "node:path";
import { parseFrontmatter } from "../adapters/frontmatter";
import { listFileEntries, moveFileExclusive, readText } from "../adapters/filesystem";
import { runNewSource } from "../commands/new-source";
import type { ProjectPaths } from "../utils/paths";

export interface InboxItem {
  kind: "paste" | "note" | "file";
  filePath: string;
  title: string;
  tags: string[];
  sourceUrl?: string;
}

export async function listInboxItems(paths: ProjectPaths): Promise<InboxItem[]> {
  const items: InboxItem[] = [];
  items.push(...(await readMarkdownInbox(paths.inboxPasteDir, "paste")));
  items.push(...(await readMarkdownInbox(paths.inboxNotesDir, "note")));
  items.push(...(await readFileInbox(paths.inboxFilesDir)));
  return items.sort((a, b) => a.filePath.localeCompare(b.filePath));
}

export async function processInbox(paths: ProjectPaths): Promise<Array<{ inboxPath: string; sourceId: string }>> {
  const items = await listInboxItems(paths);
  const processed: Array<{ inboxPath: string; sourceId: string }> = [];

  for (const item of items) {
    const sourceType = inferSourceType(item);
    const result = await runNewSource(paths, {
      type: sourceType,
      title: item.title,
      url: item.sourceUrl,
      tags: item.tags,
      file: item.filePath
    });

    await archiveInboxItem(paths, item);
    processed.push({ inboxPath: item.filePath, sourceId: result.id });
  }

  return processed;
}

async function readMarkdownInbox(directory: string, kind: "paste" | "note"): Promise<InboxItem[]> {
  const entries = await listFileEntries(directory);
  const items: InboxItem[] = [];

  for (const entry of entries) {
    if (!entry.isFile || !entry.name.endsWith(".md")) {
      continue;
    }

    const content = await readText(entry.path);
    const { attributes } = parseFrontmatter(content);
    const title = typeof attributes.title === "string" && attributes.title.trim() ? attributes.title : path.basename(entry.name, ".md");
    const tags = Array.isArray(attributes.tags) ? attributes.tags.map(String) : [];
    const sourceUrl = typeof attributes.source_url === "string" ? attributes.source_url : undefined;
    items.push({ kind, filePath: entry.path, title, tags, sourceUrl });
  }

  return items;
}

async function readFileInbox(directory: string): Promise<InboxItem[]> {
  const entries = await listFileEntries(directory);
  const items: InboxItem[] = [];

  for (const entry of entries) {
    if (!entry.isFile || entry.name.endsWith(".meta.md")) {
      continue;
    }

    const metadataPath = `${entry.path}.meta.md`;
    let title = path.basename(entry.name, path.extname(entry.name));
    let tags: string[] = [];
    let sourceUrl: string | undefined;

    try {
      const metadataContent = await readText(metadataPath);
      const { attributes } = parseFrontmatter(metadataContent);
      if (typeof attributes.title === "string" && attributes.title.trim()) {
        title = attributes.title;
      }
      if (Array.isArray(attributes.tags)) {
        tags = attributes.tags.map(String);
      }
      if (typeof attributes.source_url === "string") {
        sourceUrl = attributes.source_url;
      }
    } catch {
      // ignore missing metadata sidecar
    }

    items.push({ kind: "file", filePath: entry.path, title, tags, sourceUrl });
  }

  return items;
}

function inferSourceType(item: InboxItem): string {
  if (item.kind === "note") {
    return "journal";
  }

  if (item.kind === "paste") {
    return "article";
  }

  const extension = path.extname(item.filePath).toLowerCase();
  if (extension === ".pdf") {
    return "pdf";
  }
  if ([".mp3", ".m4a", ".wav", ".aac"].includes(extension)) {
    return "audio";
  }
  if ([".md", ".txt", ".html"].includes(extension)) {
    return "article";
  }
  return "asset";
}

async function archiveInboxItem(paths: ProjectPaths, item: InboxItem): Promise<void> {
  const destinationDir = path.join(paths.inboxProcessedDir, item.kind === "file" ? "files" : item.kind === "note" ? "notes" : "paste");
  const requestedPath = path.join(destinationDir, path.basename(item.filePath));
  const destinationPath = await moveFileExclusive(item.filePath, requestedPath);

  if (item.kind === "file") {
    const metaSource = `${item.filePath}.meta.md`;
    const metaDestination = `${destinationPath}.meta.md`;
    try {
      await moveFileExclusive(metaSource, metaDestination);
    } catch {
      // no metadata file to move
    }
  }
}
