import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../features/auth/useAuth';
import Spinner from '../ui/Spinner';


export default function ProtectedRoute() {
  const { user, initializing } = useAuth();
  const location = useLocation();


  if (initializing) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  return <Outlet />;
}
