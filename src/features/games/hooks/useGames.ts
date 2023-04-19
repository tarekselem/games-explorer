import { useQuery } from "@tanstack/react-query";
import { useSearchContext } from "@shared/hooks";
import { ApiClient } from "@api/api-client";
import { ISearchFilters } from "@shared/models";
import { IGame } from "../games-model";

export const useGames = () => {
  const { searchFilters } = useSearchContext();

  const GAMES_CACHE_KEY = ["games", searchFilters];
  const apiClient = new ApiClient<IGame>("/games");

  return useQuery<IGame[], Error>({
    queryKey: GAMES_CACHE_KEY,
    queryFn: () =>
      apiClient.getAll({ params: mainipulateParams(searchFilters) }),
  });
};

const mainipulateParams = ({
  pageSize,
  sortOrder,
  searchText,
  genre,
  platform,
}: ISearchFilters): { [index: string]: unknown } => {
  const params: { [index: string]: unknown } = {
    page_size: pageSize,
  };

  if (sortOrder) params["ordering"] = sortOrder;
  if (searchText) params["search"] = searchText;
  if (genre) params["genres"] = genre.id;
  if (platform) params["parent_platforms"] = platform.id;

  return params;
};

export default useGames;
