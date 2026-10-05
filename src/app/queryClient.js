import { MutationCache, QueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';


export const queryClient = new QueryClient({
  // One place to surface every failed mutation as a toast.
  mutationCache: new MutationCache({
    onError: (error) => toast.error(error?.message || 'Something went wrong'),
  }),
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      refetchOnWindowFocus: false,
      // Never retry 4xx (bad input, 401, 403, 404) - only network / 5xx failures.
      retry: (failureCount, error) => {
        if (error?.status >= 400 && error?.status < 500) return false;
        return failureCount < 2;
      },
    },
    mutations: { retry: false },
  },
});
