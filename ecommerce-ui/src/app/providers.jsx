import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { queryClient } from './queryClient';
import { AuthProvider } from '../features/auth/AuthContext';


export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
        <Toaster position="top-right" />
      </AuthProvider>
    </QueryClientProvider>
  );
}
