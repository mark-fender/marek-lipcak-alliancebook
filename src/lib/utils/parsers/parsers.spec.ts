import {
  parsePage,
  parseGender,
  parseStarship,
  parseSort,
  parseIdFromUrl,
  parseNumber,
} from './parsers';

describe('parsers', () => {
  describe('parseIdFromUrl', () => {
    it('should extract the ID from a valid URL', () => {
      const url = 'https://swapi.dev/api/people/1/';
      const result = parseIdFromUrl(url);
      expect(result).toBe('1');
    });

    it('should return null for a URL without an ID', () => {
      const url = 'https://swapi.dev/api/people/';
      const result = parseIdFromUrl(url);
      expect(result).toBeNull();
    });

    it('should return null for an invalid URL', () => {
      const url = 'https://swapi.dev/api/planets/1/';
      const result = parseIdFromUrl(url);
      expect(result).toBeNull();
    });

    it('should handle URLs without a trailing slash', () => {
      const url = 'https://swapi.dev/api/people/2';
      const result = parseIdFromUrl(url);
      expect(result).toBe('2');
    });

    it('should return null for an empty string', () => {
      const url = '';
      const result = parseIdFromUrl(url);
      expect(result).toBeNull();
    });

    it('should return null for a non-string input', () => {
      const url = null;
      const result = parseIdFromUrl(url);
      expect(result).toBeNull();
    });
  });

  describe('parsePage', () => {
    it('should return the parsed page number if valid', () => {
      expect(parsePage('3')).toBe(3);
    });

    it('should return 1 if the value is not a valid number', () => {
      expect(parsePage('abc')).toBe(1);
    });

    it('should return 1 if the value is less than or equal to 0', () => {
      expect(parsePage('-5')).toBe(1);
    });

    it('should return 1 if the value is undefined', () => {
      expect(parsePage(undefined)).toBe(1);
    });

    it('should return the first value if an array is provided', () => {
      expect(parsePage(['2', '3'])).toBe(2);
    });
  });

  describe('parseGender', () => {
    it('should return the gender if it is valid', () => {
      expect(parseGender('female')).toBe('female');
    });

    it('should return "any" if the gender is invalid', () => {
      expect(parseGender('invalid')).toBe('any');
    });

    it('should return "any" if the value is undefined', () => {
      expect(parseGender(undefined)).toBe('any');
    });

    it('should return the first value if an array is provided', () => {
      expect(parseGender(['male', 'female'])).toBe('male');
    });

    it('should handle case-insensitive input', () => {
      expect(parseGender('FEMALE')).toBe('female');
    });
  });

  describe('parseStarship', () => {
    it('should return the starship filter if it is valid', () => {
      expect(parseStarship('yes')).toBe('yes');
    });

    it('should return "any" if the starship filter is invalid', () => {
      expect(parseStarship('invalid')).toBe('any');
    });

    it('should return "any" if the value is undefined', () => {
      expect(parseStarship(undefined)).toBe('any');
    });

    it('should return the first value if an array is provided', () => {
      expect(parseStarship(['no', 'yes'])).toBe('no');
    });

    it('should handle case-insensitive input', () => {
      expect(parseStarship('YES')).toBe('yes');
    });
  });

  describe('parseSort', () => {
    it('should return the sort option if it is valid', () => {
      expect(parseSort('name-asc')).toBe('name-asc');
    });

    it('should return "featured" if the sort option is invalid', () => {
      expect(parseSort('invalid')).toBe('featured');
    });

    it('should return "featured" if the value is undefined', () => {
      expect(parseSort(undefined)).toBe('featured');
    });

    it('should return the first value if an array is provided', () => {
      expect(parseSort(['height-desc', 'name-asc'])).toBe('height-desc');
    });

    it('should handle case-insensitive input', () => {
      expect(parseSort('NAME-ASC')).toBe('name-asc');
    });
  });

  describe('parseNumber', () => {
    it('should parse a valid number string', () => {
      expect(parseNumber('123')).toBe(123);
    });

    it('should parse a number string with commas', () => {
      expect(parseNumber('1,234')).toBe(1234);
    });

    it('should parse a number string with leading and trailing spaces', () => {
      expect(parseNumber('  456  ')).toBe(456);
    });

    it('should return null for an empty string', () => {
      expect(parseNumber('')).toBeNull();
    });

    it('should return null for a string with non-numeric characters', () => {
      expect(parseNumber('abc')).toBeNull();
    });

    it('should return null for a string with mixed numeric and non-numeric characters', () => {
      expect(parseNumber('123abc')).toBeNull();
    });

    it('should return null for null or undefined input', () => {
      expect(parseNumber(null as unknown as string)).toBeNull();
      expect(parseNumber(undefined as unknown as string)).toBeNull();
    });

    it('should parse a valid floating-point number string', () => {
      expect(parseNumber('123.45')).toBe(123.45);
    });

    it('should return null for a string with invalid floating-point format', () => {
      expect(parseNumber('123.45.67')).toBeNull();
    });

    it('should return value 0 for a string with only spaces', () => {
      expect(parseNumber('   ')).toBe(0);
    });
  });
});
