import CharacterAvatar from './CharacterAvatar';
import type { Character } from '@/lib/api/types';

type CharacterCardProps = Readonly<{
  character: Character;
}>;

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article
      className='flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm
        transition hover:shadow-md focus-within:ring-2 focus-within:ring-primary'
      aria-label={character.name}>
      <CharacterAvatar character={character} />

      <div className='flex flex-col gap-1 p-4'>
        <h2 className='text-xl font-semibold leading-tight'>{character.name}</h2>
        <p className='text-sm text-muted-foreground'>
          {character.gender} · {character.birth_year}
        </p>

        <dl className='mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm'>
          <div>
            <dt className='text-muted-foreground'>Height</dt>
            <dd>{character.height} cm</dd>
          </div>
          <div>
            <dt className='text-muted-foreground'>Mass</dt>
            <dd>{character.mass} kg</dd>
          </div>
          <div>
            <dt className='text-muted-foreground'>Hair</dt>
            <dd>{character.hair_color}</dd>
          </div>
          <div>
            <dt className='text-muted-foreground'>Eyes</dt>
            <dd>{character.eye_color}</dd>
          </div>
          <div className='col-span-2'>
            <dt className='text-muted-foreground'>Skin</dt>
            <dd>{character.skin_color}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
