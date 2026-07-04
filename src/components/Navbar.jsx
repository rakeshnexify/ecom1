import { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "font-semibold text-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  function closeMobileMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className="text-2xl font-bold text-blue-600"
          >
            UniQuick Mart
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/shop" className={navLinkClass}>
              Shop
            </NavLink>

            <NavLink to="/cart" className={navLinkClass}>
              Cart
            </NavLink>

            <NavLink to="/login" className={navLinkClass}>
              Login
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-700 md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-2xl leading-none">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="flex flex-col gap-4 border-t border-gray-200 py-4 md:hidden">
            <NavLink
              to="/"
              end
              onClick={closeMobileMenu}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              onClick={closeMobileMenu}
              className={navLinkClass}
            >
              Shop
            </NavLink>

            <NavLink
              to="/cart"
              onClick={closeMobileMenu}
              className={navLinkClass}
            >
              Cart
            </NavLink>

            <NavLink
              to="/login"
              onClick={closeMobileMenu}
              className={navLinkClass}
            >
              Login
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;