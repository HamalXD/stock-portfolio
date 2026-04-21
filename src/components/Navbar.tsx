import { NavLink } from "react-router";

export default function Navbar() {
  const base = "px-4 py-2 rounded-lg text-sm font-medium transition";

  const active = "bg-blue-600 text-white";
  const inactive = "text-gray-700 hover:bg-gray-100";

  return (
    <nav className="w-full border-b bg-white sticky top-0">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between">
        <h1 className="font-bold">Stock Portfolio</h1>

        <div className="flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            Portfolio
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
