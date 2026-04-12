export function formatDate(date: Date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

export function formatTimestamp(date: Date = new Date()): string {
  return date.toISOString().replace("T", " ").slice(0, 16);
}
