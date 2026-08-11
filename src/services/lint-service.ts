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

export async function lintVault(wikiDir: string, sourcesDir: string, vaultDir?: string): Promise<LintReport> {
  const findings: LintFinding[] = [];
  const wikiFiles = await listMarkdownFilesRecursive(wikiDir);
  const sourceFiles = await listMarkdownFilesRecursive(sourcesDir);
  const sourceIds = new Set(sourceFiles.map((filePath) => path.basename(filePath, ".md")));

  if (vaultDir) {
    const validateSourcePath = async (sourceFile: string, sourcePath: string, fieldName: string): Promise<void> => {
      const resolvedSourcePath = path.resolve(vaultDir, sourcePath);
      const relativeToVault = path.relative(vaultDir, resolvedSourcePath);
      if (relativeToVault.startsWith("..") || path.isAbsolute(relativeToVault)) {
        findings.push({
          level: "error",
          filePath: sourceFile,
          message: `${fieldName} escapes the vault: ${sourcePath}`
        });
        return;
      }

      try {
        await readText(resolvedSourcePath);
      } catch {
        findings.push({
          level: "error",
          filePath: sourceFile,
          message: `Missing raw source file: ${sourcePath}`
        });
      }
    };

    for (const sourceFile of sourceFiles) {
      const content = await readText(sourceFile);
      const { attributes } = parseFrontmatter(content);
      const sourcePath = attributes.source_path;
      if (typeof sourcePath !== "string" || !sourcePath.trim()) {
        findings.push({
          level: "error",
          filePath: sourceFile,
          message: "Source record is missing source_path"
        });
      } else {
        await validateSourcePath(sourceFile, sourcePath, "Source path");
      }

      const additionalPaths = attributes.additional_source_paths;
      if (Array.isArray(additionalPaths)) {
        for (const additionalPath of additionalPaths) {
          await validateSourcePath(sourceFile, additionalPath, "Additional source path");
        }
      }
    }
  }
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
