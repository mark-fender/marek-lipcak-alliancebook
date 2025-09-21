import { calculateStatistics } from './calculateStatistics';
import type { Character } from '@/lib/api/types';

describe('calculateStatistics', () => {
  const makeCharacter = (overrides: Partial<Character>): Character => ({
    name: 'Test',
    height: '180',
    mass: '80',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: '',
    url: 'https://swapi.dev/api/people/1/',
    ...overrides,
  });

  it('should calculate averages for height and mass', () => {
    const chars = [
      makeCharacter({ height: '180', mass: '80' }),
      makeCharacter({ height: '200', mass: '100' }),
    ];
    const stats = calculateStatistics(chars);
    expect(stats.averageHeight).toBe(190); // (180+200)/2
    expect(stats.averageMass).toBe(90); // (80+100)/2
  });

  it('should ignore invalid height and mass values', () => {
    const chars = [
      makeCharacter({ height: 'unknown', mass: 'n/a' }),
      makeCharacter({ height: '180', mass: '80' }),
    ];
    const stats = calculateStatistics(chars);
    expect(stats.averageHeight).toBe(180);
    expect(stats.averageMass).toBe(80);
  });

  it('should handle numbers with commas correctly', () => {
    const chars = [
      makeCharacter({ height: '1,800', mass: '1,000' }),
      makeCharacter({ height: '200', mass: '100' }),
    ];
    const stats = calculateStatistics(chars);
    expect(stats.averageHeight).toBe(1000);
    expect(stats.averageMass).toBe(550);
  });

  it('should return null averages when no valid values exist', () => {
    const chars = [
      makeCharacter({ height: 'unknown', mass: 'n/a' }),
      makeCharacter({ height: 'invalid', mass: '' }),
    ];
    const stats = calculateStatistics(chars);
    expect(stats.averageHeight).toBe(0);
    expect(stats.averageMass).toBe(0);
  });

  it('should count distinct homeworlds', () => {
    const chars = [
      makeCharacter({ homeworld: 'https://swapi.dev/api/planets/1/' }),
      makeCharacter({ homeworld: 'https://swapi.dev/api/planets/2/' }),
      makeCharacter({ homeworld: 'https://swapi.dev/api/planets/1/' }),
    ];
    const stats = calculateStatistics(chars);
    expect(stats.distinctHomeworlds).toBe(2);
  });

  it('should count characters who have starships', () => {
    const chars = [
      makeCharacter({ starships: [] }),
      makeCharacter({ starships: ['x-wing'] }),
      makeCharacter({ starships: ['falcon', 'x-wing'] }),
    ];
    const stats = calculateStatistics(chars);
    expect(stats.starshipPilots).toBe(2);
  });

  it('should round averages to one decimal place', () => {
    const chars = [
      makeCharacter({ height: '175', mass: '70' }),
      makeCharacter({ height: '176', mass: '71' }),
    ];
    const stats = calculateStatistics(chars);
    expect(stats.averageHeight).toBe(175.5);
    expect(stats.averageMass).toBe(70.5);
  });
});
