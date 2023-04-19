import { IGenre } from "@shared/models";
import { useFetchQuery } from "@shared/hooks";

export const useGenres = () => useFetchQuery<IGenre>("/genres", ["genres"]);

export default useGenres;
