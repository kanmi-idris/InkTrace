export function info(message: string): void {
  console.log(message);
}

export function success(message: string): void {
  console.log(`OK: ${message}`);
}

export function warn(message: string): void {
  console.warn(`WARN: ${message}`);
}

export function fail(message: string): never {
  throw new Error(message);
}
