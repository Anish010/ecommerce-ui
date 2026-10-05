import { createBrowserRouter, Navigate } from 'react-router-dom';


import AppLayout from '../components/layout/AppLayout';
import AuthLayout from '../components/layout/AuthLayout';
import AdminLayout from '../components/layout/AdminLayout';
import ProtectedRoute from '../components/guards/ProtectedRoute';
import GuestRoute from '../components/guards/GuestRoute';
import AdminRoute from '../components/guards/AdminRoute';


import ProductsPage from '../pages/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import OrderSuccessPage from '../pages/OrderSuccessPage';
import OrdersPage from '../pages/OrdersPage';
import OrderDetailPage from '../pages/OrderDetailPage';
import ProfilePage from '../pages/ProfilePage';
import AdminProductsPage from '../pages/AdminProductsPage';
import AdminUsersPage from '../pages/AdminUsersPage';
import NotFoundPage from '../pages/NotFoundPage';
import ForbiddenPage from '../pages/ForbiddenPage';


export const router = createBrowserRouter([
  // Login / register: centred card layout, only for signed-out visitors
  {
    element: <GuestRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: '/login', element: <LoginPage /> },
          { path: '/register', element: <RegisterPage /> },
        ],
      },
    ],
  },


  // Everything else lives inside the main layout
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Navigate to="/products" replace /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:id', element: <ProductDetailPage /> },


      {
        element: <ProtectedRoute />,
        children: [
          { path: '/cart', element: <CartPage /> },
          { path: '/checkout', element: <CheckoutPage /> },
          { path: '/orders', element: <OrdersPage /> },
          { path: '/orders/:id', element: <OrderDetailPage /> },
          { path: '/orders/:id/success', element: <OrderSuccessPage /> },
          { path: '/profile', element: <ProfilePage /> },
        ],
      },


      {
        element: <AdminRoute />,
        children: [
          {
            element: <AdminLayout />,
            children: [
              { path: '/admin/products', element: <AdminProductsPage /> },
              { path: '/admin/users', element: <AdminUsersPage /> },
            ],
          },
        ],
      },


      { path: '/403', element: <ForbiddenPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
