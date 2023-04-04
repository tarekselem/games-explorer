import { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { isDevelopement } from "@shared/utils/app-enviroments";

import { queryClient } from "./query-client";

export const QueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      {isDevelopement() && <ReactQueryDevtools></ReactQueryDevtools>}
      {children}
    </QueryClientProvider>
  );
};
