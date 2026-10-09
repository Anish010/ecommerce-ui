import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../features/auth/useAuth';


export default function GuestRoute() {
  const { user, initializing } = useAuth();
  if (initializing) return null;
  if (user) return <Navigate to="/products" replace />;
  return <Outlet />;
}
