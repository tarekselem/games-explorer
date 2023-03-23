import { useData } from "@shared/hooks";
import { IGenre } from "@shared/models";
import { IGame, IPlatform } from "../games-model";

interface IGamesFilters {
  selectedGenre: IGenre | null;
  selectedPlatform: IPlatform | null;
  selectedSortOrder: string;
  searchText: string;
}

export const useGames = ({
  selectedGenre,
  selectedPlatform,
  selectedSortOrder,
  searchText,
}: IGamesFilters) =>
  useData<IGame>({
    endpoint: "/games",
    requestConfig: {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedSortOrder,
        search: searchText,
      },
    },
    dependencies: [
      selectedGenre?.id,
      selectedPlatform?.id,
      selectedSortOrder,
      searchText,
    ],
  });

export default useGames;
