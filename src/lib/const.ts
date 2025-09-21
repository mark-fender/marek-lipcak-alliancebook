import {
  CharacterGenderFilter,
  CharacterStarshipFilter,
  CharacterSortOption,
  CharacterFilters,
} from '@/types/FilterTypes';

export const GENDER_OPTIONS: { value: CharacterGenderFilter; label: string }[] = [
  { value: 'any', label: 'All' },
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'n/a', label: 'Droid' },
  { value: 'hermaphrodite', label: 'Hermaphrodite' },
  { value: 'other', label: 'Other' },
];

export const STARSHIP_OPTIONS: { value: CharacterStarshipFilter; label: string }[] = [
  { value: 'any', label: 'All' },
  { value: 'yes', label: 'Pilots starships' },
  { value: 'no', label: 'No starships' },
];

export const SORT_OPTIONS: { value: CharacterSortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'name-asc', label: 'Name (A → Z)' },
  { value: 'name-desc', label: 'Name (Z → A)' },
  { value: 'height-desc', label: 'Height (Tallest)' },
  { value: 'height-asc', label: 'Height (Shortest)' },
];

export const DEFAULT_FILTERS: CharacterFilters = {
  gender: 'any',
  starship: 'any',
  sort: 'featured',
};

export const API_PAGE_SIZE = 10;
export const CHARACTERS_PER_PAGE = 12;
