import Header from '@/components/Header';
import Pagination from '@/components/pagination/Pagination';
import CharacterList from '@/components/CharacterList';
import Filters from '@/components/filters/Filters';
import { CharacterFilters } from '@/types/FilterTypes';
import { parsePage, parseGender, parseStarship, parseSort } from '@/lib/utils/parsers/parsers';
import { buildSearchParams } from '@/lib/utils/buildSearchParam/buildSearchParam';
import { fetchCharacterPage } from '@/lib/api/characters';

type HomeProps = Readonly<{
  searchParams: Record<string, string | string[] | undefined>;
}>;

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const page = parsePage(params.page);
  const filters: CharacterFilters = {
    gender: parseGender(params.gender),
    starship: parseStarship(params.starship),
    sort: parseSort(params.sort),
  };

  const data = await fetchCharacterPage({ page, query: params.query as string, filters });
  const baseSearchParams = buildSearchParams(params.query as string, filters);

  return (
    <main className='mx-auto p-4'>
      <Header />
      <Filters query={params.query as string} filters={filters} />
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






