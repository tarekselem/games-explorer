import { QueryClient } from "@tanstack/react-query";

const RETRIES_COUNT = 2;
const STALE_TIME = 5 * 1000 * 1000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: RETRIES_COUNT,
      staleTime: STALE_TIME,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});
