import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../features/auth/useAuth';
import { ROLES } from '../../lib/constants';
import Spinner from '../ui/Spinner';


export default function AdminRoute() {
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
  if (user.role !== ROLES.ADMIN) return <Navigate to="/403" replace />;
  return <Outlet />;
}
