import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@api/api-client";
import { IPlatform } from "@shared/models";

const PLATFORMS_CACHE_KEY = ["platforms"];
const apiClient = new ApiClient<IPlatform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery<IPlatform[], Error>({
    queryKey: PLATFORMS_CACHE_KEY,
    queryFn: apiClient.getAll,
  });

export default usePlatform;
