import fs from "node:fs";
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
  const projectRoot = findProjectRoot(rootDir);
  loadEnvironmentFile(projectRoot, rootDir);
  const configuredVault = process.env.INKTRACE_VAULT_PATH;
  const vaultDir = vaultOverride
    ? path.resolve(rootDir, vaultOverride)
    : configuredVault
      ? path.resolve(projectRoot, configuredVault)
      : path.join(projectRoot, "vault");

  return {
    rootDir: projectRoot,
    templateDir: path.join(projectRoot, "templates"),
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

function findProjectRoot(startDir: string): string {
  let current = path.resolve(startDir);
  while (true) {
    if (fs.existsSync(path.join(current, "templates"))) {
      return current;
    }

    const parent = path.dirname(current);
    if (parent === current) {
      break;
    }
    current = parent;
  }

  const moduleCandidates = [
    path.resolve(__dirname, "../.."),
    path.resolve(__dirname, "../../..")
  ];
  const moduleRoot = moduleCandidates.find((candidate) => fs.existsSync(path.join(candidate, "templates")));
  return moduleRoot ?? path.resolve(startDir);
}

function loadEnvironmentFile(projectRoot: string, startDir: string): void {
  const candidates = [path.join(startDir, ".env"), path.join(projectRoot, ".env")];
  const envPath = candidates.find((candidate) => fs.existsSync(candidate));
  if (!envPath) {
    return;
  }

  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split(/\r?\n/)) {
    const match = line.match(/^\s*(?:export\s+)?([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match || process.env[match[1]] !== undefined) {
      continue;
    }

    const value = match[2];
    process.env[match[1]] = value.startsWith('"') && value.endsWith('"')
      ? value.slice(1, -1)
      : value.startsWith("'") && value.endsWith("'")
        ? value.slice(1, -1)
        : value;
  }
}
