import { AppRouter } from './providers/router';
import { QueryClient, QueryClientProvider } from 'react-query';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};
