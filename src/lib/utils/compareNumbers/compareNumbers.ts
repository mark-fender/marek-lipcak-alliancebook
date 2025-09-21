import { parseNumber } from '../parsers/parsers';

export function compareNumbers(
  a: string | null,
  b: string | null,
  direction: 'asc' | 'desc',
): number {
  const aValue = a ? parseNumber(a) : null;
  const bValue = b ? parseNumber(b) : null;

  if (aValue === null && bValue === null) return 0;
  if (aValue === null) return 1;
  if (bValue === null) return -1;

  return direction === 'asc' ? aValue - bValue : bValue - aValue;
}
