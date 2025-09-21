export type CharacterGenderFilter = 'any' | 'female' | 'male' | 'n/a' | 'hermaphrodite' | 'other';

export type CharacterStarshipFilter = 'any' | 'yes' | 'no';

export type CharacterSortOption =
  | 'featured'
  | 'name-asc'
  | 'name-desc'
  | 'height-asc'
  | 'height-desc';

export type CharacterFilters = {
  gender: CharacterGenderFilter;
  starship: CharacterStarshipFilter;
  sort: CharacterSortOption;
};
