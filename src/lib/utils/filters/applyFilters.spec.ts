import { applyFilters } from './applyFilters';
import { Character } from '@/lib/api/types';
import { CharacterFilters } from '@/lib/types/FilterTypes';

describe('applyFilters', () => {
  const characters: Character[] = [
    { name: 'Luke Skywalker', gender: 'male', starships: ['X-Wing'] } as unknown as Character,
    { name: 'Leia Organa', gender: 'female', starships: [] } as unknown as Character,
    { name: 'R2-D2', gender: 'n/a', starships: [] } as unknown as Character,
    { name: 'Yoda', gender: 'other', starships: [] } as unknown as Character,
    {
      name: 'Lando Calrissian',
      gender: 'male',
      starships: ['Millennium Falcon'],
    } as unknown as Character,
  ];

  it('should return all characters when no filters are applied', () => {
    const filters: CharacterFilters = { gender: 'any', starship: 'any', sort: 'featured' };
    const result = applyFilters(characters, filters);
    expect(result).toEqual(characters);
  });

  it('should filter characters by gender (female)', () => {
    const filters: CharacterFilters = { gender: 'female', starship: 'any', sort: 'featured' };
    const result = applyFilters(characters, filters);
    expect(result).toEqual([{ name: 'Leia Organa', gender: 'female', starships: [] }]);
  });

  it('should filter characters by gender (male)', () => {
    const filters: CharacterFilters = { gender: 'male', starship: 'any', sort: 'featured' };
    const result = applyFilters(characters, filters);
    expect(result).toEqual([
      { name: 'Luke Skywalker', gender: 'male', starships: ['X-Wing'] },
      { name: 'Lando Calrissian', gender: 'male', starships: ['Millennium Falcon'] },
    ]);
  });

  it('should filter characters by gender (n/a)', () => {
    const filters: CharacterFilters = { gender: 'n/a', starship: 'any', sort: 'featured' };
    const result = applyFilters(characters, filters);
    expect(result).toEqual([{ name: 'R2-D2', gender: 'n/a', starships: [] }]);
  });

  it('should filter characters by gender (other)', () => {
    const filters: CharacterFilters = { gender: 'other', starship: 'any', sort: 'featured' };
    const result = applyFilters(characters, filters);
    expect(result).toEqual([{ name: 'Yoda', gender: 'other', starships: [] }]);
  });

  it('should filter characters with starships (starship: yes)', () => {
    const filters: CharacterFilters = { gender: 'any', starship: 'yes', sort: 'featured' };
    const result = applyFilters(characters, filters);
    expect(result).toEqual([
      { name: 'Luke Skywalker', gender: 'male', starships: ['X-Wing'] },
      { name: 'Lando Calrissian', gender: 'male', starships: ['Millennium Falcon'] },
    ]);
  });

  it('should filter characters without starships (starship: no)', () => {
    const filters: CharacterFilters = { gender: 'any', starship: 'no', sort: 'featured' };
    const result = applyFilters(characters, filters);
    expect(result).toEqual([
      { name: 'Leia Organa', gender: 'female', starships: [] },
      { name: 'R2-D2', gender: 'n/a', starships: [] },
      { name: 'Yoda', gender: 'other', starships: [] },
    ]);
  });

  it('should filter characters by both gender and starship', () => {
    const filters: CharacterFilters = { gender: 'male', starship: 'yes', sort: 'featured' };
    const result = applyFilters(characters, filters);
    expect(result).toEqual([
      { name: 'Luke Skywalker', gender: 'male', starships: ['X-Wing'] },
      { name: 'Lando Calrissian', gender: 'male', starships: ['Millennium Falcon'] },
    ]);
  });
});
