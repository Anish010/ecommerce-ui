import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../features/auth/useAuth';
import CartBadge from '../../features/cart/components/CartBadge';
import Button from '../ui/Button';


const linkClass = ({ isActive }) =>
    `text-sm font-medium ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`;


export default function Navbar() {
    const { user, isAdmin, logout } = useAuth();
    const navigate = useNavigate();


    const handleLogout = () => {
        logout();
        navigate('/login');
    };


    return (
        <header className="border-b bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                <Link to="/products" className="text-xl font-bold text-indigo-600">
                    ShopEase
                </Link>


                <div className="flex items-center gap-5">
                    <NavLink to="/products" className={linkClass}>
                        Products
                    </NavLink>
                    {user && (
                        <NavLink to="/orders" className={linkClass}>
                            Orders
                        </NavLink>
                    )}
                    {isAdmin && (
                        <NavLink to="/admin/products" className={linkClass}>
                            Admin
                        </NavLink>
                    )}
                    {user && <CartBadge />}


                    {user ? (
                        <>
                            <NavLink to="/profile" className={linkClass}>
                                {user.name}
                            </NavLink>
                            <Button variant="secondary" size="sm" onClick={handleLogout}>
                                Log out
                            </Button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className={linkClass}>
                                Log in
                            </NavLink>
                            <Button size="sm" onClick={() => navigate('/register')}>
                                Sign up
                            </Button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}
