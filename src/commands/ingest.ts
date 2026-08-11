import { runInboxProcess } from "./inbox";
import { runRebuildIndex } from "./rebuild-index";
import { runLint } from "./lint";
import type { ProjectPaths } from "../utils/paths";

export interface IngestInboxResult {
  lines: string[];
  hasErrors: boolean;
}

export async function runIngestInbox(paths: ProjectPaths): Promise<IngestInboxResult> {
  const output: string[] = [];

  output.push("STEP 1: Processing inbox items...");
  const processed = await runInboxProcess(paths);
  processed.forEach((line) => output.push(line));

  output.push("", "STEP 2: Rebuilding index...");
  await runRebuildIndex(paths);
  output.push("Rebuilt index.");

  output.push("", "STEP 3: Running lint...");
  const lintResult = await runLint(paths);
  lintResult.lines.forEach((line) => output.push(line));

  return { lines: output, hasErrors: lintResult.hasErrors };
}
