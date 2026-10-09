import { Link, Outlet } from 'react-router-dom';


export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <Link to="/products" className="mb-6 text-3xl font-bold text-indigo-600">
        ShopEase
      </Link>
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow-sm">
        <Outlet />
      </div>
    </div>
  );
}
