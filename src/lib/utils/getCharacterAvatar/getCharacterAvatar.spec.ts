import { Character } from '@/lib/api/types';
import { getCharacterAvatarUrl } from './getCharacterAvatar';

jest.mock('./parseIdFromUrl/parseIdFromUrl', () => ({
  parseIdFromUrl: jest.fn((url: string) => {
    const match = url.match(/\/(\d+)\/$/);
    return match ? match[1] : null;
  }),
}));

describe('getCharacterAvatarUrl', () => {
  it('should return the correct avatar URL when a valid ID is parsed', () => {
    const character = {
      name: 'Luke Skywalker',
      url: 'https://swapi.dev/api/people/1/',
    };

    const result = getCharacterAvatarUrl(character as Character);
    expect(result).toBe(
      'https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/1.jpg',
    );
  });

  it('should return the placeholder URL when the ID cannot be parsed', () => {
    const character = {
      name: 'Unknown Character',
      url: 'https://swapi.dev/api/unknown/',
    };

    const result = getCharacterAvatarUrl(character as Character);
    expect(result).toBe(
      'https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/placeholder.jpg',
    );
  });

  it('should handle empty or malformed URLs gracefully', () => {
    const character = {
      name: 'Malformed Character',
      url: '',
    };

    const result = getCharacterAvatarUrl(character as Character);
    expect(result).toBe(
      'https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/placeholder.png',
    );
  });
});
