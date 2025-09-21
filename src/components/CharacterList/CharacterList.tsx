import CharacterCard from '@/components/CharacterList/CharacterCard';
import { Character } from '@/lib/api/types';

type CharacterListProps = Readonly<{
  readonly characters: Character[];
}>;

export default function CharacterList({ characters }: CharacterListProps) {

  if (characters.length === 0) {
    return (
      <p className='text-center mt-4'>Found no one, you have. Broaden your search, you must.</p>
    );
  }

  return (
    <section
      id='results'
      aria-label='Characters'
      className='m-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {characters.map((character) => (
        <CharacterCard key={character.url} character={character} />
      ))}
    </section>
  );
}
