import { useData, useSearchContext } from "@shared/hooks";
import { IGame } from "../games-model";
import { ISearchFilters } from "@shared/models";

export const useGames = () => {
  const { searchFilters, genre, platform } = useSearchContext();

  const fetchResults = useData<IGame>(
    {
      endpoint: "/games",
      requestConfig: {
        params: mainipulateParams(searchFilters),
      },
    },
    [searchFilters]
  );

  return {
    ...fetchResults,
    platform,
    genre,
    pageSize: searchFilters.pageSize,
  };
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
  if (platform) params["platforms"] = platform.id;

  return params;
};

export default useGames;
