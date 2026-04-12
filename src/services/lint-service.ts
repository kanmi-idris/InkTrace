import path from "node:path";
import { parseFrontmatter } from "../adapters/frontmatter";
import { extractCitations, extractWikilinks } from "../adapters/markdown";
import { listMarkdownFilesRecursive, readText } from "../adapters/filesystem";

export interface LintFinding {
  level: "error" | "warning";
  filePath: string;
  message: string;
}

export interface LintReport {
  findings: LintFinding[];
}

export async function lintVault(wikiDir: string, sourcesDir: string): Promise<LintReport> {
  const findings: LintFinding[] = [];
  const wikiFiles = await listMarkdownFilesRecursive(wikiDir);
  const sourceIds = new Set((await listMarkdownFilesRecursive(sourcesDir)).map((filePath) => path.basename(filePath, ".md")));
  const wikiSlugs = new Set(wikiFiles.map((filePath) => path.basename(filePath, ".md")));
  const inboundLinkCount = new Map<string, number>();

  for (const slug of wikiSlugs) {
    inboundLinkCount.set(slug, 0);
  }

  for (const filePath of wikiFiles) {
    const content = await readText(filePath);
    const { attributes } = parseFrontmatter(content);
    const slug = path.basename(filePath, ".md");

    for (const required of ["id", "type", "status", "updated_at"]) {
      if (!attributes[required]) {
        findings.push({
          level: "error",
          filePath,
          message: `Missing required frontmatter field: ${required}`
        });
      }
    }

    const citations = extractCitations(content);
    if (citations.length === 0) {
      findings.push({
        level: "warning",
        filePath,
        message: "Wiki page has no source citations"
      });
    }

    for (const citation of citations) {
      if (!sourceIds.has(citation)) {
        findings.push({
          level: "error",
          filePath,
          message: `Missing source record for citation ${citation}`
        });
      }
    }

    const links = extractWikilinks(content);
    for (const link of links) {
      if (!wikiSlugs.has(link)) {
        findings.push({
          level: "warning",
          filePath,
          message: `Broken wikilink [[${link}]]`
        });
        continue;
      }

      inboundLinkCount.set(link, (inboundLinkCount.get(link) ?? 0) + 1);
    }

    if (links.length === 0 && citations.length === 0) {
      findings.push({
        level: "warning",
        filePath,
        message: "Page has neither citations nor wikilinks"
      });
    }

    inboundLinkCount.set(slug, inboundLinkCount.get(slug) ?? 0);
  }

  for (const filePath of wikiFiles) {
    const slug = path.basename(filePath, ".md");
    const content = await readText(filePath);
    const outboundLinks = extractWikilinks(content).length;
    const inboundLinks = inboundLinkCount.get(slug) ?? 0;

    if (inboundLinks === 0 && outboundLinks === 0) {
      findings.push({
        level: "warning",
        filePath,
        message: "Orphan page with no inbound or outbound links"
      });
    }
  }

  return { findings };
}
