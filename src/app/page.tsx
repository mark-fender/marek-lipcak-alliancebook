import Header from '@/components/Header';
import Pagination from '@/components/Pagination';
import CharacterList from '@/components/CharacterList';
import { fetchCharactersPage } from '@/lib/api/characters';

type HomeProps = {
  readonly searchParams: { readonly page?: string; readonly query?: string };
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const page = Number(params.page ?? 1) || 1;
  const query = params.query?.slice(0, 100) ?? '';

  const data = await fetchCharactersPage(page, query);

  return (
    <main className='mx-auto p-4'>
      <Header />
      <CharacterList characters={data.results} />
      <Pagination page={page} hasPrev={Boolean(data.previous)} hasNext={Boolean(data.next)} />
    </main>
  );
}
