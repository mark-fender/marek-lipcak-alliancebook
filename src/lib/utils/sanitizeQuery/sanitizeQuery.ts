export function sanitizeQuery(value: string | string[] | undefined): string {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw ? raw.slice(0, 100) : '';
}
