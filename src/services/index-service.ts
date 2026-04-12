import path from "node:path";
import { listMarkdownFilesRecursive, readText, writeText } from "../adapters/filesystem";
import { extractSummary, extractTitle } from "../adapters/markdown";

interface IndexSection {
  heading: string;
  directory: string;
}

export async function rebuildIndex(indexFile: string, wikiDir: string): Promise<void> {
  const sections: IndexSection[] = [
    { heading: "Topics", directory: path.join(wikiDir, "topics") },
    { heading: "Entities", directory: path.join(wikiDir, "entities") },
    { heading: "Synthesis", directory: path.join(wikiDir, "synthesis") },
    { heading: "Questions", directory: path.join(wikiDir, "questions") }
  ];

  const output: string[] = [
    "# InkTrace Index",
    "",
    "This file is the primary navigation layer for the vault.",
    ""
  ];

  for (const section of sections) {
    output.push(`## ${section.heading}`, "");
    const files = await listMarkdownFilesRecursive(section.directory);
    if (files.length === 0) {
      output.push("- None yet.", "");
      continue;
    }

    for (const filePath of files) {
      const content = await readText(filePath);
      const title = extractTitle(content);
      const summary = extractSummary(content);
      const slug = path.basename(filePath, ".md");
      output.push(`- [[${slug}]] - ${title}. ${summary}`);
    }

    output.push("");
  }

  await writeText(indexFile, output.join("\n").trimEnd() + "\n");
}
