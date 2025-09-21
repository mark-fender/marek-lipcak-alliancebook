import {
  CharacterGenderFilter,
  CharacterStarshipFilter,
  CharacterSortOption,
} from '@/types/FilterTypes';
import { normalizeParam } from '../noramlizeParam/normalizeParam';

export function parseIdFromUrl(url: string | null): string | null {
  if (typeof url !== 'string') return null;
  const regex = /people\/(\d+)\/?$/;
  const m = regex.exec(url);
  return m ? m[1] : null;
}

type QueryParam = string | string[] | undefined;

export function parsePage(value: QueryParam): number {
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : 1;
}

export function parseGender(value: QueryParam): CharacterGenderFilter {
  const raw = normalizeParam(value);
  const allowed: CharacterGenderFilter[] = [
    'any',
    'female',
    'male',
    'n/a',
    'hermaphrodite',
    'other',
  ];
  return allowed.includes(raw as CharacterGenderFilter) ? (raw as CharacterGenderFilter) : 'any';
}

export function parseStarship(value: QueryParam): CharacterStarshipFilter {
  const raw = normalizeParam(value);
  const allowed: CharacterStarshipFilter[] = ['any', 'yes', 'no'];
  return allowed.includes(raw as CharacterStarshipFilter)
    ? (raw as CharacterStarshipFilter)
    : 'any';
}

export function parseSort(value: QueryParam): CharacterSortOption {
  const raw = normalizeParam(value);
  const allowed: CharacterSortOption[] = [
    'featured',
    'name-asc',
    'name-desc',
    'height-asc',
    'height-desc',
  ];
  return allowed.includes(raw as CharacterSortOption) ? (raw as CharacterSortOption) : 'featured';
}

export function parseNumber(value: string): number | null {
  if (!value) return null;
  const normalized = value.replace(/,/g, '').trim();
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}
