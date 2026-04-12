import { appendFile } from "node:fs/promises";
import path from "node:path";
import { ensureDir, readText } from "../adapters/filesystem";
import type { LogEntry } from "../domain/log-entry";
import { formatTimestamp } from "../utils/date";

export async function appendLogEntry(logFile: string, entry: Omit<LogEntry, "timestamp"> & { timestamp?: string }): Promise<void> {
  await ensureDir(path.dirname(logFile));
  const timestamp = entry.timestamp ?? formatTimestamp();
  const block = `\n## [${timestamp}] ${entry.event} | ${entry.title}\n- ${entry.detail}\n`;
  await appendFile(logFile, block, "utf8");
}

export async function ensureLogFile(logFile: string): Promise<void> {
  try {
    await readText(logFile);
  } catch {
    await appendFile(logFile, "# InkTrace Log\n", "utf8");
  }
}
