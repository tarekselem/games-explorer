import { useData } from "@shared/hooks";
import { IGame } from "../games-model";

export const useGames = () => useData<IGame>("/games");
export default useGames;
