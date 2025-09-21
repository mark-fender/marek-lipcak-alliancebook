export function compareStrings(a: string, b: string, direction: 'asc' | 'desc'): number {
  if (a.toLowerCase() === b.toLowerCase()) return 0;
  const result = a.localeCompare(b, undefined, { sensitivity: 'base' });
  return direction === 'asc' ? result : -result;
}
