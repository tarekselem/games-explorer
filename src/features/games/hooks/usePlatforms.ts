import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@api/api-client";
import { IPlatform } from "@shared/models";
import { CACHE_KEYS } from "@shared/constants";

const apiClient = new ApiClient<IPlatform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery<IPlatform[], Error>({
    queryKey: CACHE_KEYS.PLATFORMS,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

export default usePlatform;
