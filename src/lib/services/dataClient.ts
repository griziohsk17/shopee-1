import type { LoadEvent } from '@sveltejs/kit';

export async function fetchJSON<T>(path: string, fetcher?: LoadEvent['fetch']): Promise<T> {
  const f = fetcher ?? fetch;
  const res = await f(path, { headers: { 'content-type': 'application/json' } });
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
  return res.json() as Promise<T>;
}
