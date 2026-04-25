import path from "node:path";

export interface ProjectPaths {
  rootDir: string;
  templateDir: string;
  vaultDir: string;
  rawDir: string;
  inboxDir: string;
  inboxPasteDir: string;
  inboxFilesDir: string;
  inboxNotesDir: string;
  inboxProcessedDir: string;
  sourcesDir: string;
  wikiDir: string;
  systemDir: string;
  indexFile: string;
  logFile: string;
}

export function resolveProjectPaths(rootDir: string, vaultOverride?: string): ProjectPaths {
  const vaultDir = vaultOverride ? path.resolve(vaultOverride) : path.join(rootDir, "vault");
  return {
    rootDir,
    templateDir: path.join(rootDir, "templates"),
    vaultDir,
    rawDir: path.join(vaultDir, "raw"),
    inboxDir: path.join(vaultDir, "inbox"),
    inboxPasteDir: path.join(vaultDir, "inbox", "paste"),
    inboxFilesDir: path.join(vaultDir, "inbox", "files"),
    inboxNotesDir: path.join(vaultDir, "inbox", "notes"),
    inboxProcessedDir: path.join(vaultDir, "inbox", "processed"),
    sourcesDir: path.join(vaultDir, "sources"),
    wikiDir: path.join(vaultDir, "wiki"),
    systemDir: path.join(vaultDir, "system"),
    indexFile: path.join(vaultDir, "index.md"),
    logFile: path.join(vaultDir, "log.md")
  };
}

export function rawSubdirForType(rawDir: string, type: string): string {
  const normalized = type.toLowerCase();
  switch (normalized) {
    case "article":
      return path.join(rawDir, "articles");
    case "pdf":
      return path.join(rawDir, "pdfs");
    case "journal":
    case "note":
      return path.join(rawDir, "journals");
    case "transcript":
      return path.join(rawDir, "transcripts");
    case "audio":
      return path.join(rawDir, "audio");
    default:
      return path.join(rawDir, "assets");
  }
}
