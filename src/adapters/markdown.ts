export function extractTitle(content: string): string {
  const titleMatch = content.match(/^#\s+(.+)$/m);
  return titleMatch ? titleMatch[1].trim() : "Untitled";
}

export function extractSummary(content: string): string {
  const summaryMatch = content.match(/^## Summary\n([\s\S]*?)(\n## |$)/m);
  if (!summaryMatch) {
    return "No summary yet.";
  }

  const lines = summaryMatch[1]
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return lines[0] ?? "No summary yet.";
}

export function extractCitations(content: string): string[] {
  return Array.from(content.matchAll(/\[(src-\d{4}-\d{2}-\d{2}-\d{3})\]/g), (match) => match[1]);
}

export function extractWikilinks(content: string): string[] {
  return Array.from(content.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g), (match) => match[1].trim());
}
