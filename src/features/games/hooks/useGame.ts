import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@api/api-client";
import { CACHE_KEYS } from "@shared/constants";
import { IGame } from "../games-model";

const apiClient = new ApiClient<IGame>("/games");

export const useGame = (slug: string) =>
  useQuery({
    queryKey: [CACHE_KEYS.GAMES, slug],
    queryFn: () => apiClient.get(slug),
  });
