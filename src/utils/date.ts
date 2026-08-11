export const DEFAULT_TIME_ZONE = "Africa/Lagos";

export function formatDate(date: Date = new Date()): string {
  const parts = getDateParts(date);
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function formatTimestamp(date: Date = new Date()): string {
  const parts = getDateParts(date);
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`;
}

export function formatFileTimestamp(date: Date = new Date()): string {
  const parts = getDateParts(date);
  return `${parts.year}-${parts.month}-${parts.day}-${parts.hour}${parts.minute}${parts.second}`;
}

function getDateParts(date: Date): Record<string, string> {
  const timeZone = process.env.INKTRACE_TIMEZONE || DEFAULT_TIME_ZONE;
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  });

  return Object.fromEntries(
    formatter.formatToParts(date)
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value])
  );
}
