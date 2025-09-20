import { parseIdFromUrl } from './parseIdFromUrl';

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
