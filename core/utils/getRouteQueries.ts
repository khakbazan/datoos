export function getRouteQueries(
  searchParams: URLSearchParams,
  queries: Array<string>
) {
  const results: Record<string, string | undefined> = {};

  for (const query of queries) {
    results[query] = searchParams.get(String(query)) ?? undefined;
  }

  return results;
}
