import { sanitizeQuery } from './sanitizeQuery';

describe('sanitizeQuery', () => {
  it('should return empty string when value is undefined', () => {
    expect(sanitizeQuery(undefined)).toBe('');
  });

  it('should return empty string when value is empty string', () => {
    expect(sanitizeQuery('')).toBe('');
  });

  it('should handle normal string input', () => {
    expect(sanitizeQuery('hello')).toBe('hello');
  });

  it('should handle array input and take the first element', () => {
    expect(sanitizeQuery(['first', 'second'])).toBe('first');
  });

  it('should truncate long strings to 100 characters', () => {
    const longString = 'a'.repeat(150);
    const result = sanitizeQuery(longString);
    expect(result.length).toBe(100);
    expect(result).toBe('a'.repeat(100));
  });
});
