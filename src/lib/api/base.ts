export const BASE_URL = 'https://swapi.py4e.com/api';

export const REVALIDATE_SECONDS = 60 * 60; // 1 hour

export async function fetchJson<T>(
  endpoint: string,
  options?: RequestInit & { revalidate?: number },
): Promise<T> {
  const { revalidate = REVALIDATE_SECONDS, ...rest } = options ?? {};
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    next: { revalidate },
    ...rest,
  });

  if (!response.ok) {
    throw new Error(`SWAPI fetch failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}
