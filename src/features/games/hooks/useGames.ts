import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { shallow } from "zustand/shallow";
import { ApiClient, FetchDataResponse } from "@api/api-client";
import { SearchFilters, useSearchQueryStore } from "@shared/hooks";
import { CACHE_KEYS } from "@shared/constants";
import { IGame } from "../games-model";

export const useGames = () => {
  const searchQuery = useSearchQueryStore(
    (store) => store.searchQuery,
    shallow
  );
  console.log("searchQuery", searchQuery);
  const apiClient = new ApiClient<IGame>("/games");

  const infiniteQuery = useInfiniteQuery<FetchDataResponse<IGame>, Error>({
    queryKey: GAMES_CACHE_KEY(searchQuery),
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAllPagination({
        params: mainipulateParams({ ...searchQuery, page: pageParam }),
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next && allPages.length + 1,
    staleTime: ms("1h"),
  });

  const data = infiniteQuery.data?.pages.flatMap((page) => page.results);
  const lookup = (id: number): IGame | undefined =>
    data?.find((item) => item.id === id);

  return {
    ...infiniteQuery,
    data,
    lookup,
    totalCount: infiniteQuery.data?.pages.reduce(
      (total, page) => total + page.results.length,
      0
    ),
  };
};

const mainipulateParams = ({
  page,
  pageSize,
  sortOrder,
  searchText,
  genreId,
  platformId,
}: SearchFilters): { [index: string]: unknown } => {
  console.log("sortOrder", sortOrder);
  console.log("platformId", platformId);
  const params: { [index: string]: unknown } = {
    page,
    page_size: pageSize,
  };

  if (sortOrder) params["ordering"] = sortOrder;
  if (searchText) params["search"] = searchText;
  if (genreId) params["genres"] = genreId;
  if (platformId) params["parent_platforms"] = platformId;

  return params;
};

const GAMES_CACHE_KEY = ({
  searchText,
  platformId,
  genreId,
}: SearchFilters) => [CACHE_KEYS.GAMES, { searchText, platformId, genreId }];

export default useGames;
