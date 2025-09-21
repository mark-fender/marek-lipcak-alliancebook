import { Character, CharacterStatistics } from '@/lib/api/types';

export function calculateStatistics(characters: Character[]): CharacterStatistics {
  const parseNumber = (value: string): number | null => {
    const parsed = Number(value.replace(/,/g, '').trim());
    return Number.isFinite(parsed) ? parsed : null;
  };

  const heights = characters
    .map((character) => parseNumber(character.height))
    .filter((value): value is number => value !== null);

  const masses = characters
    .map((character) => parseNumber(character.mass))
    .filter((value): value is number => value !== null);

  const average = (values: number[]): number | null =>
    values.length > 0
      ? Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1))
      : null;

  const averageHeight = average(heights);
  const averageMass = average(masses);

  const starshipPilots = characters.filter((character) => character.starships.length > 0).length;

  const distinctHomeworlds = new Set(characters.map((character) => character.homeworld)).size;

  return { averageHeight, averageMass, starshipPilots, distinctHomeworlds };
}
