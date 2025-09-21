import { normalizeParam } from './normalizeParam';

describe('normalizeParam', () => {
  it('should return the lowercase string when a valid string is provided', () => {
    const result = normalizeParam('HelloWorld');
    expect(result).toBe('helloworld');
  });

  it('should return the first element of the array in lowercase when an array is provided', () => {
    const result = normalizeParam(['First', 'Second']);
    expect(result).toBe('first');
  });

  it('should return an empty string when the input is undefined', () => {
    const result = normalizeParam(undefined);
    expect(result).toBe('');
  });

  it('should return an empty string when the input is an empty string', () => {
    const result = normalizeParam('');
    expect(result).toBe('');
  });

  it('should handle an empty array gracefully and return an empty string', () => {
    const result = normalizeParam([]);
    expect(result).toBe('');
  });
});
