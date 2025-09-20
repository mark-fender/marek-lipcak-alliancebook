import { Character } from '../../api/types';
import { parseIdFromUrl } from '../parseIdFromUrl/parseIdFromUrl';

export function getCharacterAvatarUrl(character: Character): string {
  const id = parseIdFromUrl(character.url) ?? 'placeholder';
  return `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${id}.jpg`;
}
