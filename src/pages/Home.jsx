// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12">
      
      {/* Hero Section */}
      <div className="mb-12 animate-fade-in-down">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6 drop-shadow-lg">
          Rick and Morty Wiki
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Welcome to the ultimate database for the multiverse! Explore characters, 
          discover strange locations, and browse through all the episodes.
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        
        {/* Characters Card */}
        <Link 
          to="/characters" 
          className="group block bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-green-500 hover:bg-gray-750 transition duration-300 transform hover:-translate-y-2 shadow-xl"
        >
          <div className="text-6xl mb-4 group-hover:scale-110 transition duration-300">👽</div>
          <h2 className="text-2xl font-bold text-green-400 mb-2">Characters</h2>
          <p className="text-gray-400">
            Meet the cast! From Rick Sanchez to Birdperson, find everyone here.
          </p>
        </Link>

        {/* Locations Card */}
        <Link 
          to="/locations" 
          className="group block bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 hover:bg-gray-750 transition duration-300 transform hover:-translate-y-2 shadow-xl"
        >
          <div className="text-6xl mb-4 group-hover:scale-110 transition duration-300">🪐</div>
          <h2 className="text-2xl font-bold text-blue-400 mb-2">Locations</h2>
          <p className="text-gray-400">
            Explore the multiverse. Planets, dimensions, and space stations await.
          </p>
        </Link>

        {/* Episodes Card */}
        <Link 
          to="/episodes" 
          className="group block bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 hover:bg-gray-750 transition duration-300 transform hover:-translate-y-2 shadow-xl"
        >
          <div className="text-6xl mb-4 group-hover:scale-110 transition duration-300">📺</div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">Episodes</h2>
          <p className="text-gray-400">
            Binge the data. See air dates, episode codes, and character appearances.
          </p>
        </Link>

      </div>
    </div>
  );
}