import { IGenre } from "@shared/models";
import { useFetchQuery } from "@shared/hooks";

const GENRES_CACHE_KEY = ["genres"];

export const useGenres = () =>
  useFetchQuery<IGenre>("/genres", GENRES_CACHE_KEY);

export default useGenres;
