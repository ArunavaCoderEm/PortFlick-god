import ClerkConfig from "@/config/clerk-config";
import React, { PropsWithChildren } from "react";
import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function CustomContext({
  children,
}: PropsWithChildren<{}>): React.ReactNode {
  return (
    <>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <Router>
            <ClerkConfig>
              {children}
            </ClerkConfig>
          </Router>
        </QueryClientProvider>
      </StrictMode>
    </>
  );
}
