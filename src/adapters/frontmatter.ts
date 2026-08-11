export type FrontmatterValue = string | string[] | boolean | number | null;

export interface ParsedFrontmatter {
  attributes: Record<string, FrontmatterValue>;
  body: string;
}

export function parseFrontmatter(content: string): ParsedFrontmatter {
  const normalized = content.replace(/\r\n?/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!match) {
    return { attributes: {}, body: content };
  }

  const attributes: Record<string, FrontmatterValue> = {};
  const lines = match[1].split("\n");
  let currentListKey: string | undefined;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.trim()) {
      continue;
    }

    const listItem = line.match(/^\s*-\s+(.+)$/);
    if (listItem && currentListKey) {
      const currentValue = attributes[currentListKey];
      if (Array.isArray(currentValue)) {
        currentValue.push(String(parseScalar(listItem[1])));
      }
      continue;
    }

    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      currentListKey = undefined;
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();
    if (!key) {
      currentListKey = undefined;
      continue;
    }

    if (!rawValue) {
      const nextNonEmpty = lines.slice(index + 1).find((nextLine) => nextLine.trim().length > 0);
      if (nextNonEmpty?.match(/^\s*-\s+.+$/)) {
        attributes[key] = [];
        currentListKey = key;
      } else {
        attributes[key] = "";
        currentListKey = undefined;
      }
      continue;
    }

    attributes[key] = parseScalar(rawValue);
    currentListKey = undefined;
  }

  return { attributes, body: normalized.slice(match[0].length) };
}

export function renderFrontmatter(attributes: Record<string, FrontmatterValue>): string {
  const lines = Object.entries(attributes).map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key}: [${value.map(renderScalar).join(", ")}]`;
    }
    return `${key}: ${renderScalar(value)}`;
  });
  return `---\n${lines.join("\n")}\n---`;
}

function parseScalar(rawValue: string): FrontmatterValue {
  const value = stripInlineComment(rawValue.trim());
  if (value === "true" || value === "false") {
    return value === "true";
  }
  if (value === "null" || value === "~") {
    return null;
  }
  if (/^-?\d+(\.\d+)?$/.test(value)) {
    return Number(value);
  }
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    return inner ? splitInlineArray(inner).map((item) => String(parseScalar(item))) : [];
  }
  if (value.startsWith('"') && value.endsWith('"')) {
    try {
      return JSON.parse(value) as string;
    } catch {
      return value.slice(1, -1);
    }
  }
  if (value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1).replace(/''/g, "'");
  }
  return value;
}

function splitInlineArray(value: string): string[] {
  const items: string[] = [];
  let current = "";
  let quote: '"' | "'" | undefined;

  for (const character of value) {
    if ((character === '"' || character === "'") && (!quote || quote === character)) {
      quote = quote ? undefined : character;
      current += character;
      continue;
    }
    if (character === "," && !quote) {
      items.push(current.trim());
      current = "";
      continue;
    }
    current += character;
  }

  if (current.trim()) {
    items.push(current.trim());
  }
  return items;
}

function stripInlineComment(value: string): string {
  let quote: '"' | "'" | undefined;
  for (let index = 0; index < value.length; index += 1) {
    const character = value[index];
    if ((character === '"' || character === "'") && (!quote || quote === character)) {
      quote = quote ? undefined : character;
      continue;
    }
    if (character === "#" && !quote && (index === 0 || /\s/.test(value[index - 1]))) {
      return value.slice(0, index).trimEnd();
    }
  }
  return value;
}

function renderScalar(value: string | boolean | number | null): string {
  if (value === null) {
    return "null";
  }
  if (typeof value === "string") {
    return JSON.stringify(value);
  }
  return String(value);
}
