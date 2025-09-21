import { Character } from '../../api/types';
import { parseIdFromUrl } from '../parsers/parsers';

export function getCharacterAvatarUrl(character: Character): string {
  const id = parseIdFromUrl(character.url);
  return id
    ? `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${id}.jpg`
    : 'https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/placeholder.png';
}
