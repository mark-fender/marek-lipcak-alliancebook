export function buildHref(page: number, searchParams: Record<string, string>): string {
  const params = new URLSearchParams(searchParams);
  if (page <= 1) {
    params.delete('page');
  } else {
    params.set('page', String(page));
  }
  const query = params.toString();
  return query ? `/?${query}` : '/';
}
