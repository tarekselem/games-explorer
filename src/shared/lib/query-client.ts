import { QueryClient } from "@tanstack/react-query";
import ms from "ms";

const RETRIES_COUNT = 2;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: RETRIES_COUNT,
      staleTime: ms("5h"),
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      keepPreviousData: true,
    },
  },
});
