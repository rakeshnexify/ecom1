import { NavLink } from "react-router";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "font-semibold text-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          UniQuick Mart
        </NavLink>

        <nav className="flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={navLinkClass}
          >
            Shop
          </NavLink>

          <NavLink
            to="/cart"
            className={navLinkClass}
          >
            Cart
          </NavLink>

          <NavLink
            to="/login"
            className={navLinkClass}
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;