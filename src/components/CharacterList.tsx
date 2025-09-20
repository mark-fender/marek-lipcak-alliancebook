import CharacterCard from '@/components/CharacterCard';
import { Character } from '@/lib/api/types';

type CharacterListProps = {
  readonly characters: Character[];
};

export default function CharacterList({ characters }: CharacterListProps) {
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
