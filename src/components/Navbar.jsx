import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-400">
          R&M Wiki
        </Link>

        {/* Linkler */}
        <div className="flex gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-green-400 font-bold" : "text-gray-300 hover:text-white"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/characters" 
            className={({ isActive }) => isActive ? "text-green-400 font-bold" : "text-gray-300 hover:text-white"}
          >
            Characters
          </NavLink>
          <NavLink 
            to="/locations" 
            className={({ isActive }) => isActive ? "text-green-400 font-bold" : "text-gray-300 hover:text-white"}
          >
            Locations
          </NavLink>

          <NavLink 
            to="/episodes" 
            className={({ isActive }) => isActive ? "text-green-400 font-bold" : "text-gray-300 hover:text-white"}
          >
            Episodes
          </NavLink>

        </div>
      </div>
    </nav>
  );
}