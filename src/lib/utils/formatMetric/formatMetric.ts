export function formatMetric(value: number | null, unit: string): string {
  if (value === null) return '—';
  return `${Math.round(value)} ${unit}`;
}
