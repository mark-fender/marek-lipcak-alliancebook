import Header from '@/components/Header/Header';
import Pagination from '@/components/pagination/Pagination';
import CharacterList from '@/components/CharacterList/CharacterList';
import Filters from '@/components/filters/Filters';
import { CharacterFilters } from '@/lib/types/FilterTypes';
import { parsePage, parseGender, parseStarship, parseSort } from '@/lib/utils/parsers/parsers';
import { buildSearchParams } from '@/lib/utils/buildSearchParam/buildSearchParam';
import { fetchCharacterPage } from '@/lib/api/characters';
import CharacterStatistics from '@/components/CharactersStatistics/CharactersStatistics';
import { sanitizeQuery } from '@/lib/utils/sanitizeQuery/sanitizeQuery';

type HomeProps = Readonly<{
  searchParams: Record<string, string | string[] | undefined>;
}>;

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const page = parsePage(params.page);
  const query = sanitizeQuery(params.query);
  const filters: CharacterFilters = {
    gender: parseGender(params.gender),
    starship: parseStarship(params.starship),
    sort: parseSort(params.sort),
  };

  const data = await fetchCharacterPage({ page, query, filters });
  const baseSearchParams = buildSearchParams(query, filters);

  return (
    <main className='mx-auto p-4'>
      <Header />
      <Filters query={query} filters={filters} />
      <CharacterStatistics total={data.total} stats={data.statistics} />
      <CharacterList characters={data.results} />
      <Pagination
        page={data.page}
        pageCount={data.pageCount}
        total={data.total}
        searchParams={baseSearchParams}
      />
    </main>
  );
}
