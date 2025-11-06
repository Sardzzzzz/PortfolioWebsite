import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-indigo-900 text-white shadow-md z-50">
      <div className="flex items-center justify-between px-8 py-4">
        <Link
          to="/"
          className="text-3xl font-extrabold text-white hover:text-gray-300 transition-colors"
        >
          Kurt Sardes
        </Link>

        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-lg font-semibold text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg font-semibold text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="text-lg font-semibold text-white hover:text-gray-300 transition-colors"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg font-semibold text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
