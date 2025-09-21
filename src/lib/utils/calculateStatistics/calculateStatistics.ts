import { Character, CharacterStatistics } from '@/lib/api/types';
import { parseNumber } from '../parsers/parsers';

export function calculateStatistics(characters: Character[]): CharacterStatistics {
  const heights = characters
    .map((character) => parseNumber(character.height))
    .filter((value): value is number => value !== null);

  const masses = characters
    .map((character) => parseNumber(character.mass))
    .filter((value): value is number => value !== null);

  const average = (values: number[]): number =>
    values.length > 0
      ? Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1))
      : 0;

  const averageHeight = average(heights);
  const averageMass = average(masses);

  const starshipPilots = characters.filter((character) => character.starships.length > 0).length;

  const distinctHomeworlds = new Set(
    characters.map((character) => character.homeworld).filter(Boolean),
  ).size;

  return {
    averageHeight,
    averageMass,
    starshipPilots,
    distinctHomeworlds,
  };
}
