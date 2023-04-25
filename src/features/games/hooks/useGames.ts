import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { ApiClient, FetchDataResponse } from "@api/api-client";
import { useSearchState } from "@shared/hooks";
import { ISearchFilters } from "@shared/models";
import { IGame } from "../games-model";

export const useGames = () => {
  const { searchFilters } = useSearchState();
  const apiClient = new ApiClient<IGame>("/games");

  const infiniteQuery = useInfiniteQuery<FetchDataResponse<IGame>, Error>({
    queryKey: GAMES_CACHE_KEY(searchFilters),
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAllPagination({
        params: mainipulateParams({ ...searchFilters, page: pageParam }),
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next && allPages.length + 1,
    staleTime: ms("1h"),
  });

  return {
    ...infiniteQuery,
    data: infiniteQuery.data?.pages.flatMap((page) => page.results),
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
}: ISearchFilters): { [index: string]: unknown } => {
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
}: ISearchFilters) => ["games", { searchText, platformId, genreId }];

export default useGames;
