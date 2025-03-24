import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryProviderProps } from '../models/ReactQuery';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }