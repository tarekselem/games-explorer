import { useFetchQuery, useSearchContext } from "@shared/hooks";
import { IGame } from "../games-model";
import { ISearchFilters } from "@shared/models";

export const useGames = () => {
  const { searchFilters } = useSearchContext();
  const GAMES_CACHE_KEY = ["games", searchFilters];

  return useFetchQuery<IGame>(
    "/games",
    GAMES_CACHE_KEY,
    mainipulateParams(searchFilters)
  );
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
