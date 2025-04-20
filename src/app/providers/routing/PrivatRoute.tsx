import { Navigate } from 'react-router-dom';
import { getFromStorage } from '@/shared/lib/store';
import { Layout } from '@/widgets/Layout/Layout';

const PrivatRoute = ({ children }: { children: JSX.Element }) => {
  const auth = getFromStorage('auth');
  return auth ? <Layout>{children}</Layout> : <Navigate to="/403" />;
};

export { PrivatRoute };
