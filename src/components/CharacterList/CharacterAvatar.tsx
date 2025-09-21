'use client';

import Image from 'next/image';
import type { Character } from '@/lib/api/types';
import { getCharacterAvatarUrl } from '@/lib/utils/getCharacterAvatar/getCharacterAvatar';

type CharacterAvatarProps = Readonly<{
  readonly character: Character;
}>;

export default function CharacterAvatar({ character }: CharacterAvatarProps) {
  const avatar = getCharacterAvatarUrl(character);

  return (
    <div className='relative h-48 w-full sm:h-56 md:h-64 bg-zinc-100 dark:bg-zinc-800'>
      <Image
        src={avatar}
        alt={character.name}
        fill
        className='object-cover'
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/placeholder.png';
        }}
        sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
        priority
      />
    </div>
  );
}
