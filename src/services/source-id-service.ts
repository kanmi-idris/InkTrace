import path from "node:path";
import { listMarkdownFilesRecursive } from "../adapters/filesystem";
import { formatDate } from "../utils/date";

export async function generateSourceId(sourcesDir: string, now: Date = new Date()): Promise<string> {
  const date = formatDate(now);
  const todayFiles = (await listMarkdownFilesRecursive(sourcesDir)).filter((filePath) =>
    path.basename(filePath).startsWith(`src-${date}-`)
  );

  const nextIndex = todayFiles.length + 1;
  return `src-${date}-${String(nextIndex).padStart(3, "0")}`;
}
