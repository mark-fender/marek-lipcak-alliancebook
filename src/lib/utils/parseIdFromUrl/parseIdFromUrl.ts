export function parseIdFromUrl(url: string | null): string | null {
  if (typeof url !== 'string') return null;
  const regex = /people\/(\d+)\/?$/;
  const m = regex.exec(url);
  return m ? m[1] : null;
}
