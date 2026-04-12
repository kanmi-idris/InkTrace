import { rebuildIndex } from "../services/index-service";
import { appendLogEntry } from "../services/log-service";
import type { ProjectPaths } from "../utils/paths";

export async function runRebuildIndex(paths: ProjectPaths): Promise<void> {
  await rebuildIndex(paths.indexFile, paths.wikiDir);
  await appendLogEntry(paths.logFile, {
    event: "maintenance",
    title: "Rebuilt index",
    detail: "Regenerated index.md from wiki pages."
  });
}
