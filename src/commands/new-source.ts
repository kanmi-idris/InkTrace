import path from "node:path";
import { createSourceRecord } from "../services/source-record-service";
import { generateSourceId } from "../services/source-id-service";
import { importRawSource } from "../services/source-import-service";
import { appendLogEntry } from "../services/log-service";
import type { SourceRecord } from "../domain/source";
import { formatDate } from "../utils/date";
import type { ProjectPaths } from "../utils/paths";

interface NewSourceOptions {
  type: string;
  title: string;
  url?: string;
  author?: string;
  tags?: string[];
  file?: string;
}

export async function runNewSource(paths: ProjectPaths, options: NewSourceOptions): Promise<{ id: string; recordPath: string; rawPath: string }> {
  const id = await generateSourceId(paths.sourcesDir);
  const rawPath = await importRawSource({
    rawDir: paths.rawDir,
    type: options.type,
    title: options.title,
    sourceId: id,
    inputFile: options.file,
    url: options.url
  });

  const record: SourceRecord = {
    id,
    title: options.title,
    type: options.type,
    author: options.author ?? "",
    created_at: formatDate(),
    source_path: path.relative(paths.vaultDir, rawPath),
    source_url: options.url ?? "",
    tags: options.tags ?? [],
    status: "active"
  };

  const recordPath = await createSourceRecord(paths.templateDir, paths.sourcesDir, record);

  await appendLogEntry(paths.logFile, {
    event: "ingest",
    title: `${id} | ${options.title}`,
    detail: `Created source record at ${path.relative(paths.vaultDir, recordPath)} and raw source at ${record.source_path}.`
  });

  return { id, recordPath, rawPath };
}
