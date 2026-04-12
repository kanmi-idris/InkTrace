export type FrontmatterValue = string | string[] | boolean | number | null;

export interface ParsedFrontmatter {
  attributes: Record<string, FrontmatterValue>;
  body: string;
}

export function parseFrontmatter(content: string): ParsedFrontmatter {
  if (!content.startsWith("---\n")) {
    return { attributes: {}, body: content };
  }

  const endIndex = content.indexOf("\n---\n", 4);
  if (endIndex === -1) {
    return { attributes: {}, body: content };
  }

  const rawFrontmatter = content.slice(4, endIndex);
  const body = content.slice(endIndex + 5);
  const attributes: Record<string, FrontmatterValue> = {};

  for (const line of rawFrontmatter.split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();

    if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
      const inner = rawValue.slice(1, -1).trim();
      attributes[key] = inner ? inner.split(",").map((item) => item.trim()) : [];
      continue;
    }

    if (rawValue === "true" || rawValue === "false") {
      attributes[key] = rawValue === "true";
      continue;
    }

    if (/^-?\d+(\.\d+)?$/.test(rawValue)) {
      attributes[key] = Number(rawValue);
      continue;
    }

    attributes[key] = rawValue;
  }

  return { attributes, body };
}

export function renderFrontmatter(attributes: Record<string, FrontmatterValue>): string {
  const lines = Object.entries(attributes).map(([key, value]) => `${key}: ${renderValue(value)}`);
  return `---\n${lines.join("\n")}\n---`;
}

function renderValue(value: FrontmatterValue): string {
  if (Array.isArray(value)) {
    return `[${value.join(", ")}]`;
  }
  if (value === null) {
    return "";
  }
  return String(value);
}
