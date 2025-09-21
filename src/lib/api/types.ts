import { CharacterFilters } from '@/lib/types/FilterTypes';

export type SwapiList<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export type FetchCharacterPageParams = {
  page: number;
  query: string;
  filters: CharacterFilters;
};

export type CharacterPage = {
  results: Character[];
  page: number;
  pageCount: number;
  total: number;
  statistics: CharacterStatistics;
};

export type CharacterStatistics = {
  averageHeight: number | null;
  averageMass: number | null;
  starshipPilots: number;
  distinctHomeworlds: number;
};
