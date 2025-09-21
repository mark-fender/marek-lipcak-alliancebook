import { compareNumbers } from './compareNumbers';

jest.mock('../parsers/parsers', () => ({
  parseNumber: jest.fn((value: string) => {
    const parsed = Number(value.replace(/,/g, '').trim());
    return Number.isFinite(parsed) ? parsed : null;
  }),
}));

describe('compareNumbers', () => {
  it('should return 0 when both numbers are equal', () => {
    expect(compareNumbers('123', '123', 'asc')).toBe(0);
    expect(compareNumbers('123', '123', 'desc')).toBe(0);
  });

  it('should return a negative number when the first number is smaller (ascending)', () => {
    expect(compareNumbers('123', '456', 'asc')).toBeLessThan(0);
  });

  it('should return a positive number when the first number is larger (ascending)', () => {
    expect(compareNumbers('456', '123', 'asc')).toBeGreaterThan(0);
  });

  it('should return a positive number when the first number is smaller (descending)', () => {
    expect(compareNumbers('123', '456', 'desc')).toBeGreaterThan(0);
  });

  it('should return a negative number when the first number is larger (descending)', () => {
    expect(compareNumbers('456', '123', 'desc')).toBeLessThan(0);
  });

  it('should handle null values correctly', () => {
    expect(compareNumbers('', '123', 'asc')).toBe(1);
    expect(compareNumbers('123', '', 'asc')).toBe(-1);
    expect(compareNumbers('', '', 'asc')).toBe(0);
  });

  it('should handle numbers with commas correctly', () => {
    expect(compareNumbers('1,234', '1,000', 'asc')).toBeGreaterThan(0);
    expect(compareNumbers('1,000', '1,234', 'desc')).toBeGreaterThan(0);
  });

  it('should handle invalid numbers gracefully', () => {
    expect(compareNumbers('abc', '123', 'asc')).toBe(1);
    expect(compareNumbers('123', 'abc', 'asc')).toBe(-1);
    expect(compareNumbers('abc', 'xyz', 'asc')).toBe(0);
  });

  it('should handle floating-point numbers correctly', () => {
    expect(compareNumbers('123.45', '123.46', 'asc')).toBeLessThan(0);
    expect(compareNumbers('123.46', '123.45', 'desc')).toBeLessThan(0);
  });
});
