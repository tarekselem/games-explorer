import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@api/api-client";
import { IGenre } from "@shared/models";
import { CACHE_KEYS } from "@shared/constants";

const apiClient = new ApiClient<IGenre>("/genres");

export const useGenres = () =>
  useQuery<IGenre[], Error>({
    queryKey: CACHE_KEYS.GENRES,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

export default useGenres;
