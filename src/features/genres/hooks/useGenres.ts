import { IGenre } from "@shared/models";
import { useData } from "@shared/hooks";

export const useGenres = () => useData<IGenre>({ endpoint: "/genres" });
export default useGenres;
