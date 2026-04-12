import { appendLogEntry } from "../services/log-service";
import type { ProjectPaths } from "../utils/paths";

export async function runLog(paths: ProjectPaths, event: string, title: string, detail: string): Promise<void> {
  await appendLogEntry(paths.logFile, { event, title, detail });
}
