import { buildSearchParams } from './buildSearchParam';
import { CharacterFilters } from '@/lib/types/FilterTypes';

describe('buildSearchParams', () => {
  it('should include the query in the params if provided', () => {
    const filters: CharacterFilters = {
      gender: 'any',
      starship: 'any',
      sort: 'featured',
    };

    const result = buildSearchParams('Luke', filters);
    expect(result).toEqual({ query: 'Luke' });
  });

  it('should include gender in the params if it is not "any"', () => {
    const filters: CharacterFilters = {
      gender: 'male',
      starship: 'any',
      sort: 'featured',
    };

    const result = buildSearchParams('', filters);
    expect(result).toEqual({ gender: 'male' });
  });

  it('should include starship in the params if it is not "any"', () => {
    const filters: CharacterFilters = {
      gender: 'any',
      starship: 'no',
      sort: 'featured',
    };

    const result = buildSearchParams('', filters);
    expect(result).toEqual({ starship: 'no' });
  });

  it('should include sort in the params if it is not "featured"', () => {
    const filters: CharacterFilters = {
      gender: 'any',
      starship: 'any',
      sort: 'name-asc',
    };

    const result = buildSearchParams('', filters);
    expect(result).toEqual({ sort: 'name-asc' });
  });

  it('should include multiple filters and query if all are provided', () => {
    const filters: CharacterFilters = {
      gender: 'female',
      starship: 'yes',
      sort: 'name-asc',
    };

    const result = buildSearchParams('Leia', filters);
    expect(result).toEqual({
      query: 'Leia',
      gender: 'female',
      starship: 'yes',
      sort: 'name-asc',
    });
  });

  it('should return an empty object if query and all filters are default values', () => {
    const filters: CharacterFilters = {
      gender: 'any',
      starship: 'any',
      sort: 'featured',
    };

    const result = buildSearchParams('', filters);
    expect(result).toEqual({});
  });
});
