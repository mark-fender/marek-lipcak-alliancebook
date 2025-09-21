import { sortCharacters } from './sortCharacters';
import { compareStrings } from '../compareStrings/compareStrings';
import { compareNumbers } from '../compareNumbers/compareNumbers';
import { Character } from '@/lib/api/types';
import { CharacterSortOption } from '@/types/FilterTypes';

jest.mock('../compareStrings/compareStrings', () => ({
  compareStrings: jest.fn(),
}));

jest.mock('../compareNumbers/compareNumbers', () => ({
  compareNumbers: jest.fn(),
}));

describe('sortCharacters', () => {
  const characters: Character[] = [
    { name: 'Luke Skywalker', height: '172', starships: [] } as unknown as Character,
    { name: 'Leia Organa', height: '150', starships: [] } as unknown as Character,
    { name: 'Darth Vader', height: '202', starships: [] } as unknown as Character,
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the original array when sort is "featured"', () => {
    const result = sortCharacters(characters, 'featured');
    expect(result).toEqual(characters);
  });

  it('should sort characters by name in ascending order', () => {
    (compareStrings as jest.Mock).mockImplementation((a, b) => a.localeCompare(b));
    const result = sortCharacters(characters, 'name-asc');
    expect(compareStrings).toHaveBeenCalled();
    expect(result).toEqual([
      { name: 'Darth Vader', height: '202', starships: [] },
      { name: 'Leia Organa', height: '150', starships: [] },
      { name: 'Luke Skywalker', height: '172', starships: [] },
    ]);
  });

  it('should sort characters by name in descending order', () => {
    (compareStrings as jest.Mock).mockImplementation((a, b) => b.localeCompare(a));
    const result = sortCharacters(characters, 'name-desc');
    expect(compareStrings).toHaveBeenCalled();
    expect(result).toEqual([
      { name: 'Luke Skywalker', height: '172', starships: [] },
      { name: 'Leia Organa', height: '150', starships: [] },
      { name: 'Darth Vader', height: '202', starships: [] },
    ]);
  });

  it('should sort characters by height in ascending order', () => {
    (compareNumbers as jest.Mock).mockImplementation((a, b) => Number(a) - Number(b));
    const result = sortCharacters(characters, 'height-asc');
    expect(compareNumbers).toHaveBeenCalled();
    expect(result).toEqual([
      { name: 'Leia Organa', height: '150', starships: [] },
      { name: 'Luke Skywalker', height: '172', starships: [] },
      { name: 'Darth Vader', height: '202', starships: [] },
    ]);
  });

  it('should sort characters by height in descending order', () => {
    (compareNumbers as jest.Mock).mockImplementation((a, b) => Number(b) - Number(a));
    const result = sortCharacters(characters, 'height-desc');
    expect(compareNumbers).toHaveBeenCalled();
    expect(result).toEqual([
      { name: 'Darth Vader', height: '202', starships: [] },
      { name: 'Luke Skywalker', height: '172', starships: [] },
      { name: 'Leia Organa', height: '150', starships: [] },
    ]);
  });

  it('should return the original array for an unsupported sort option', () => {
    const result = sortCharacters(characters, 'unsupported' as CharacterSortOption);
    expect(result).toEqual(characters);
  });
});
