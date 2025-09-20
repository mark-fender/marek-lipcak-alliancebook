import { fetchJson } from './base';
import type { SwapiList, Character } from './types';

/**
 * Fetch a single paginated set of characters from SWAPI.
 * Supports optional server-side search (?search=).
 */
export async function fetchCharactersPage(
  page = 1,
  search?: string,
): Promise<SwapiList<Character>> {
  const params = new URLSearchParams({ page: String(page) });
  if (search?.trim()) params.set('search', search.trim());

  return fetchJson<SwapiList<Character>>(`/people/?${params.toString()}`);
}
