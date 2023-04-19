import { useQuery } from "@tanstack/react-query";
import apiClient from "@shared/lib/api-client";

interface FetchDataResponse<TEntity> {
  count: number;
  results: TEntity[];
}

export const useFetchQuery = <TEntity>(
  endpoint: string,
  queryKey: unknown[],
  params?: {}
) => {
  const controller = new AbortController();
  return useQuery<TEntity[], Error>({
    queryKey: [...queryKey],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<TEntity>>(endpoint, {
          params,
          signal: controller.signal,
        })
        .then((res) => res.data?.results),
  });
};
