import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiUser,
  FiHome,
  FiSearch,
  FiUsers,
  FiBell,
} from "react-icons/fi";
import { BsHouseHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[var(--color-blue-primary)] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BsHouseHeart size={30} />
            <span className="text-xl font-bold">AfricaHousing</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-1 hover:text-[var(--color-teal-secondary)]"
            >
              <FiHome className="w-5 h-5" /> <span>Home</span>
            </Link>
            <Link
              to="/search"
              className="flex items-center space-x-1 hover:text-[var(--color-teal-secondary)]"
            >
              <FiSearch className="w-5 h-5" /> <span>Search</span>
            </Link>
            <Link
              to="/community"
              className="flex items-center space-x-1 hover:text-[var(--color-teal-secondary)]"
            >
              <FiUsers className="w-5 h-5" /> <span>Community</span>
            </Link>
            <Link
              to="/notifications"
              className="flex items-center space-x-1 hover:text-[var(--color-teal-secondary)]"
            >
              <FiBell className="w-5 h-5" /> <span>Notifications</span>
            </Link>
            <Link
              to="/profile"
              className="flex items-center space-x-1 hover:text-[var(--color-teal-secondary)]"
            >
              <FiUser className="w-5 h-5" /> <span>Profile</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-teal-secondary)]"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-blue-primary)] px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="flex items-center space-x-1 px-3 py-2 rounded-md text-white hover:bg-[var(--color-teal-secondary)]"
          >
            <FiHome className="w-5 h-5" /> <span>Home</span>
          </Link>
          <Link
            to="/search"
            className="flex items-center space-x-1 px-3 py-2 rounded-md text-white hover:bg-[var(--color-teal-secondary)]"
          >
            <FiSearch className="w-5 h-5" /> <span>Search</span>
          </Link>
          <Link
            to="/community"
            className="flex items-center space-x-1 px-3 py-2 rounded-md text-white hover:bg-[var(--color-teal-secondary)]"
          >
            <FiUsers className="w-5 h-5" /> <span>Community</span>
          </Link>
          <Link
            to="/notifications"
            className="flex items-center space-x-1 px-3 py-2 rounded-md text-white hover:bg-[var(--color-teal-secondary)]"
          >
            <FiBell className="w-5 h-5" /> <span>Notifications</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center space-x-1 px-3 py-2 rounded-md text-white hover:bg-[var(--color-teal-secondary)]"
          >
            <FiUser className="w-5 h-5" /> <span>Profile</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
