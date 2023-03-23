import { useData } from "@shared/hooks";
import { IGenre } from "@shared/models";
import { IGame } from "../games-model";

export const useGames = (selectedGenre: IGenre | null) =>
  useData<IGame>({
    endpoint: "/games",
    requestConfig: selectedGenre
      ? {
          params: { genres: selectedGenre.id },
        }
      : {},
    dependencies: [selectedGenre?.id],
  });
export default useGames;
