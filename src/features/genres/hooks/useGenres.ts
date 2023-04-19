import { ApiClient } from "@api/api-client";
import { IGenre } from "@shared/models";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<IGenre>("/genres");
const GENRES_CACHE_KEY = ["genres"];

export const useGenres = () =>
  useQuery<IGenre[], Error>({
    queryKey: GENRES_CACHE_KEY,
    queryFn: apiClient.getAll,
  });

export default useGenres;
