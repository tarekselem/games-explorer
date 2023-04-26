import { QueryKey } from "@tanstack/react-query";
import { queryClient } from "@shared/lib/query-client";

type TData<TEntity> = TEntity & { id: number | string };

export const useStateLookup = <TEntity>(
  queryKey: QueryKey,
  id: number | string
): TEntity | undefined => {
  const state = queryClient.getQueryState<TData<TEntity>[]>(queryKey);
  return state?.data?.find((item) => item.id === id);
};
