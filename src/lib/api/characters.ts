import { Character, CharacterPage, FetchCharacterPageParams, SwapiList } from './types';
import { API_PAGE_SIZE, CHARACTERS_PER_PAGE, DEFAULT_FILTERS } from '../const';
import { clampPage } from '../utils/clampPage/clampPage';
import { fetchJson } from './base';
import { applyFilters } from '../utils/filters/applyFilters';
import { sortCharacters } from '../utils/sortCharactes/sortCharacters';

export async function fetchCharacterPage({
  page,
  query,
  filters,
}: FetchCharacterPageParams): Promise<CharacterPage> {
  const safeFilters = { ...DEFAULT_FILTERS, ...filters };
  const characters = await fetchAllCharacters(query);
  const filtered = applyFilters(characters, safeFilters);
  const sorted = sortCharacters(filtered, safeFilters.sort);

  const total = sorted.length;
  const pageCount = total === 0 ? 0 : Math.ceil(total / CHARACTERS_PER_PAGE);
  const currentPage = clampPage(page, pageCount);
  const sliceStart = (currentPage - 1) * CHARACTERS_PER_PAGE;
  const sliceEnd = sliceStart + CHARACTERS_PER_PAGE;

  return {
    results: sorted.slice(sliceStart, sliceEnd),
    page: currentPage,
    pageCount,
    total,
  };
}

async function fetchAllCharacters(search: string): Promise<Character[]> {
  const params = new URLSearchParams();
  if (search?.trim()) {
    params.set('search', search.trim());
  }
  params.set('page', '1');

  const firstPage = await fetchJson<SwapiList<Character>>(`/people/?${params.toString()}`);

  const { count } = firstPage;
  const results = [...firstPage.results];

  const perPage = firstPage.results.length || API_PAGE_SIZE;
  const totalPages = perPage === 0 ? 0 : Math.ceil(count / perPage);
  if (totalPages <= 1) {
    return results;
  }

  const rest = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, index) => {
      const nextParams = new URLSearchParams(params);
      nextParams.set('page', String(index + 2));
      return fetchJson<SwapiList<Character>>(`/people/?${nextParams.toString()}`);
    }),
  );

  for (const pageData of rest) {
    results.push(...pageData.results);
  }

  return results;
}
