import { CharacterFilters } from '@/lib/types/FilterTypes';

export function buildSearchParams(
  query: string,
  filters: CharacterFilters,
): Record<string, string> {
  const params: Record<string, string> = {};
  if (query) params.query = query;
  if (filters.gender !== 'any') params.gender = filters.gender;
  if (filters.starship !== 'any') params.starship = filters.starship;
  if (filters.sort !== 'featured') params.sort = filters.sort;
  return params;
}
