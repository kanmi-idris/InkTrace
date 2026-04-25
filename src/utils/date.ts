export function formatDate(date: Date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

export function formatTimestamp(date: Date = new Date()): string {
  return date.toISOString().replace("T", " ").slice(0, 16);
}

export function formatFileTimestamp(date: Date = new Date()): string {
  const iso = date.toISOString();
  return `${iso.slice(0, 10)}-${iso.slice(11, 13)}${iso.slice(14, 16)}${iso.slice(17, 19)}`;
}
