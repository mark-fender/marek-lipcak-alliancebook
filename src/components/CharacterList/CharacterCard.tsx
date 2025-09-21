import { Badge } from '../ui/badge';
import CharacterAvatar from './CharacterAvatar';
import type { Character } from '@/lib/api/types';

type CharacterCardProps = Readonly<{
  character: Character;
}>;

export default function CharacterCard({ character }: CharacterCardProps) {
  const starshipCount = character.starships.length;
  const vehicleCount = character.vehicles.length;
  const filmCount = character.films.length;

  return (
    <article
      className='group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition focus:outline-none focus:ring-2 focus:ring-primary/50 focus-visible:ring-2 focus-visible:ring-primary/60 hover:-translate-y-1 hover:shadow-xl'
      aria-label={character.name}>
      <CharacterAvatar character={character} />

      <div className='flex flex-1 flex-col gap-3 p-4'>
        <header className='flex flex-col gap-2'>
          <h2 className='text-xl font-semibold leading-tight tracking-tight group-focus-visible:underline group-hover:underline'>
            {character.name}
          </h2>
          <p className='text-sm text-muted-foreground'>
            {character.gender} · {character.birth_year}
          </p>
          <div className='flex flex-wrap gap-2'>
            {starshipCount > 0 && (
              <Badge variant='secondary'>
                {starshipCount} starship{starshipCount > 1 ? 's' : ''}
              </Badge>
            )}
            {vehicleCount > 0 && (
              <Badge variant='secondary'>
                {vehicleCount} vehicle{vehicleCount > 1 ? 's' : ''}
              </Badge>
            )}
            <Badge variant='outline'>
              {filmCount} film{filmCount !== 1 ? 's' : ''}
            </Badge>
          </div>
        </header>

        <dl className='grid flex-1 grid-cols-2 gap-x-4 gap-y-3 text-sm'>
          <div>
            <dt className='text-xs uppercase tracking-wide text-muted-foreground'>Height</dt>
            <dd className='font-medium text-foreground'>{character.height} cm</dd>
          </div>
          <div>
            <dt className='text-xs uppercase tracking-wide text-muted-foreground'>Mass</dt>
            <dd className='font-medium text-foreground'>{character.mass} kg</dd>
          </div>
          <div>
            <dt className='text-xs uppercase tracking-wide text-muted-foreground'>Hair</dt>
            <dd className='font-medium text-foreground'>{character.hair_color}</dd>
          </div>
          <div>
            <dt className='text-xs uppercase tracking-wide text-muted-foreground'>Eyes</dt>
            <dd className='font-medium text-foreground'>{character.eye_color}</dd>
          </div>
          <div className='col-span-2'>
            <dt className='text-xs uppercase tracking-wide text-muted-foreground'>Skin</dt>
            <dd className='font-medium text-foreground'>{character.skin_color}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
