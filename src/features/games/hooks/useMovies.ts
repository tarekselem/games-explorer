import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@api/api-client";
import { CACHE_KEYS } from "@shared/constants";
import { IMovie } from "../games-model";

const useMovies = (gameId: number) => {
  const apiClient = new ApiClient<IMovie>(`games/${gameId}/movies`);

  return useQuery<IMovie[], Error>({
    queryKey: [CACHE_KEYS.MOVIES, gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useMovies;
