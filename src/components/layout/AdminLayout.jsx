import { NavLink, Outlet } from 'react-router-dom';


const linkClass = ({ isActive }) =>
  `block rounded-md px-3 py-2 text-sm font-medium ${
    isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'
  }`;


export default function AdminLayout() {
  return (
    <div className="grid gap-6 md:grid-cols-[200px_1fr]">
      <aside className="space-y-1">
        <h2 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Admin
        </h2>
        <NavLink to="/admin/products" className={linkClass}>
          Products
        </NavLink>
        <NavLink to="/admin/users" className={linkClass}>
          Users
        </NavLink>
      </aside>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
