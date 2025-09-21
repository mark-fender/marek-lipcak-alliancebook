import { Character } from '@/lib/api/types';
import { CharacterFilters } from '@/types/FilterTypes';

export function applyFilters(characters: Character[], filters: CharacterFilters): Character[] {
  const normalizedGender = filters.gender.toLowerCase();

  return characters.filter((character) => {
    const gender = character.gender.trim().toLowerCase();

    if (normalizedGender === 'female' && gender !== 'female') return false;
    if (normalizedGender === 'male' && gender !== 'male') return false;
    if (normalizedGender === 'n/a' && gender !== 'n/a') return false;
    if (normalizedGender === 'hermaphrodite' && gender !== 'hermaphrodite') return false;
    if (normalizedGender === 'other' && ['female', 'male', 'n/a', 'hermaphrodite'].includes(gender))
      return false;

    if (filters.starship === 'yes' && character.starships.length === 0) return false;
    if (filters.starship === 'no' && character.starships.length > 0) return false;

    return true;
  });
}
