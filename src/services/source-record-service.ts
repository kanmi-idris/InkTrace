import path from "node:path";
import { renderFrontmatter } from "../adapters/frontmatter";
import { readText, writeTextNoClobber } from "../adapters/filesystem";
import type { SourceRecord } from "../domain/source";

export async function createSourceRecord(templateDir: string, sourcesDir: string, record: SourceRecord): Promise<string> {
  const templatePath = path.join(templateDir, "source-record.md");
  const template = await readText(templatePath);
  const bodyTemplate = extractTemplateBody(template);
  const renderedBody = renderTemplate(bodyTemplate, {
    id: record.id,
    title: record.title,
    type: record.type,
    author: record.author,
    created_at: record.created_at,
    source_path: record.source_path,
    source_url: record.source_url,
    tags: record.tags.join(", ")
  });
  const frontmatter = renderFrontmatter({
    id: record.id,
    title: record.title,
    type: record.type,
    author: record.author,
    created_at: record.created_at,
    source_path: record.source_path,
    source_url: record.source_url,
    tags: record.tags,
    status: record.status
  });

  const filePath = path.join(sourcesDir, `${record.id}.md`);
  await writeTextNoClobber(filePath, `${frontmatter}${renderedBody.startsWith("\n") ? renderedBody : `\n${renderedBody}`}`);
  return filePath;
}

function extractTemplateBody(template: string): string {
  const match = template.match(/^---\n[\s\S]*?\n---(?:\n|$)/);
  if (!match) {
    throw new Error("Source record template must contain YAML frontmatter.");
  }
  return template.slice(match[0].length);
}

function renderTemplate(template: string, variables: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => variables[key] ?? "");
}
