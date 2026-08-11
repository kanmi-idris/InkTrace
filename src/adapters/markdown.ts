export function extractTitle(content: string): string {
  const lines = content.replace(/\r\n?/g, "\n").split("\n");
  const title = lines.find((line) => /^#\s+/.test(line));
  return title ? title.replace(/^#\s+/, "").trim() : "Untitled";
}

export function extractSummary(content: string): string {
  const lines = content.replace(/\r\n?/g, "\n").split("\n");
  const summaryIndex = lines.findIndex((line) => line.trim() === "## Summary");
  const sectionIndex = summaryIndex === -1
    ? lines.findIndex((line) => line.trim().startsWith("## "))
    : summaryIndex;
  if (sectionIndex === -1) {
    return "No summary yet.";
  }

  for (let index = sectionIndex + 1; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (line.startsWith("## ")) {
      break;
    }
    if (line) {
      return line;
    }
  }

  return "No summary yet.";
}

export function extractCitations(content: string): string[] {
  return Array.from(content.matchAll(/\[(src-\d{4}-\d{2}-\d{2}-\d{3})\]/g), (match) => match[1]);
}

export function extractWikilinks(content: string): string[] {
  return Array.from(content.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g), (match) => match[1].trim());
}
