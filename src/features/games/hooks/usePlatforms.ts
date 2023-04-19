import { useFetchQuery } from "@shared/hooks";
import { IPlatform } from "@shared/models";

const PLATFORMS_CACHE_KEY = ["platforms"];

const usePlatform = () =>
  useFetchQuery<IPlatform>("/platforms/lists/parents", PLATFORMS_CACHE_KEY);

export default usePlatform;
