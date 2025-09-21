import { Character } from '@/lib/api/types';
import { CharacterSortOption } from '@/lib/types/FilterTypes';
import { compareStrings } from '../compareStrings/compareStrings';
import { compareNumbers } from '../compareNumbers/compareNumbers';

export function sortCharacters(characters: Character[], sort: CharacterSortOption): Character[] {
  if (!sort || sort === 'featured') return characters;

  const sortedCharacters = [...characters];

  switch (sort) {
    case 'name-asc':
    case 'name-desc':
      return sortedCharacters.sort((a, b) =>
        compareStrings(a.name, b.name, sort === 'name-asc' ? 'asc' : 'desc'),
      );
    case 'height-asc':
    case 'height-desc':
      return sortedCharacters.sort((a, b) =>
        compareNumbers(a.height, b.height, sort === 'height-asc' ? 'asc' : 'desc'),
      );
    default:
      return characters;
  }
}
