import path from "node:path";
import { readText, writeText } from "../adapters/filesystem";
import type { SourceRecord } from "../domain/source";

export async function createSourceRecord(templateDir: string, sourcesDir: string, record: SourceRecord): Promise<string> {
  const templatePath = path.join(templateDir, "source-record.md");
  const template = await readText(templatePath);
  const rendered = renderTemplate(template, {
    id: record.id,
    title: record.title,
    type: record.type,
    author: record.author,
    created_at: record.created_at,
    source_path: record.source_path,
    source_url: record.source_url,
    tags: record.tags.join(", ")
  });

  const filePath = path.join(sourcesDir, `${record.id}.md`);
  await writeText(filePath, rendered);
  return filePath;
}

function renderTemplate(template: string, variables: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => variables[key] ?? "");
}
