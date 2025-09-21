import { buildHref } from './buildHref';

describe('buildHref', () => {
  it('should return the root path if no search parameters are provided and page is 1', () => {
    const result = buildHref(1, {});
    expect(result).toBe('/');
  });

  it('should include the page parameter if the page is greater than 1', () => {
    const result = buildHref(2, {});
    expect(result).toBe('/?page=2');
  });

  it('should remove the page parameter if the page is 1', () => {
    const result = buildHref(1, { page: '2', query: 'Luke' });
    expect(result).toBe('/?query=Luke');
  });

  it('should preserve other search parameters when adding the page parameter', () => {
    const result = buildHref(3, { query: 'Leia', sort: 'name-asc' });
    expect(result).toBe('/?query=Leia&sort=name-asc&page=3');
  });

  it('should handle empty search parameters gracefully', () => {
    const result = buildHref(1, {});
    expect(result).toBe('/');
  });

  it('should return the root path if all parameters are removed and page is 1', () => {
    const result = buildHref(1, { page: '1' });
    expect(result).toBe('/');
  });

  it('should encode special characters in search parameters', () => {
    const result = buildHref(2, { query: 'C-3PO & R2-D2' });
    expect(result).toBe('/?query=C-3PO+%26+R2-D2&page=2');
  });
});
