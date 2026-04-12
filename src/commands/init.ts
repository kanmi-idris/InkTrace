import path from "node:path";
import { copyDirectory, ensureDir, writeTextIfMissing } from "../adapters/filesystem";
import { ensureLogFile, appendLogEntry } from "../services/log-service";
import type { ProjectPaths } from "../utils/paths";

export async function runInit(paths: ProjectPaths): Promise<void> {
  const directories = [
    path.join(paths.rawDir, "articles"),
    path.join(paths.rawDir, "pdfs"),
    path.join(paths.rawDir, "journals"),
    path.join(paths.rawDir, "transcripts"),
    path.join(paths.rawDir, "audio"),
    path.join(paths.rawDir, "assets"),
    paths.sourcesDir,
    path.join(paths.wikiDir, "topics"),
    path.join(paths.wikiDir, "entities"),
    path.join(paths.wikiDir, "synthesis"),
    path.join(paths.wikiDir, "questions"),
    paths.systemDir,
    path.join(paths.systemDir, "templates")
  ];

  for (const directory of directories) {
    await ensureDir(directory);
  }

  await copyDirectory(paths.templateDir, path.join(paths.systemDir, "templates"));

  await writeTextIfMissing(
    path.join(paths.systemDir, "AGENTS.md"),
    await BunLike.readTemplate(path.join(paths.templateDir, "AGENTS.md"))
  );

  await writeTextIfMissing(
    paths.indexFile,
    [
      "# InkTrace Index",
      "",
      "This file is the primary navigation layer for the vault.",
      "",
      "## Topics",
      "",
      "- None yet.",
      "",
      "## Entities",
      "",
      "- None yet.",
      "",
      "## Synthesis",
      "",
      "- None yet.",
      "",
      "## Questions",
      "",
      "- None yet.",
      ""
    ].join("\n")
  );

  await ensureLogFile(paths.logFile);
  await appendLogEntry(paths.logFile, {
    event: "bootstrap",
    title: "InkTrace vault initialized",
    detail: "Created the base vault structure, copied templates, and installed AGENTS rules."
  });
}

class BunLike {
  static async readTemplate(filePath: string): Promise<string> {
    const { readText } = await import("../adapters/filesystem");
    return readText(filePath);
  }
}
