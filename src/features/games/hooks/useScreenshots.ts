import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@api/api-client";
import { CACHE_KEYS } from "@shared/constants";
import { IScreenshot } from "../games-model";

export const useScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<IScreenshot>(`games/${gameId}/screenshots`);

  return useQuery<IScreenshot[], Error>({
    queryKey: [CACHE_KEYS.SCREENSHOTS, gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};
