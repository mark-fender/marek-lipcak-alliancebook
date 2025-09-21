import { compareStrings } from './compareStrings';

describe('compareStrings', () => {
  it('should return 0 when strings are equal (case-insensitive)', () => {
    expect(compareStrings('hello', 'HELLO', 'asc')).toBe(0);
    expect(compareStrings('world', 'WORLD', 'desc')).toBe(0);
  });

  it('should return a negative number when the first string comes before the second (ascending)', () => {
    expect(compareStrings('apple', 'banana', 'asc')).toBeLessThan(0);
  });

  it('should return a positive number when the first string comes after the second (ascending)', () => {
    expect(compareStrings('banana', 'apple', 'asc')).toBeGreaterThan(0);
  });

  it('should return a positive number when the first string comes before the second (descending)', () => {
    expect(compareStrings('apple', 'banana', 'desc')).toBeGreaterThan(0);
  });

  it('should return a negative number when the first string comes after the second (descending)', () => {
    expect(compareStrings('banana', 'apple', 'desc')).toBeLessThan(0);
  });

  it('should handle empty strings correctly', () => {
    expect(compareStrings('', 'apple', 'asc')).toBeLessThan(0);
    expect(compareStrings('apple', '', 'asc')).toBeGreaterThan(0);
    expect(compareStrings('', '', 'asc')).toBe(0);
  });
});
