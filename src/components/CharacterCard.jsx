// src/components/CharacterCard.jsx
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  // Determine status color
  const statusColor =
    character.status === "Alive"
      ? "bg-green-500"
      : character.status === "Dead"
      ? "bg-red-500"
      : "bg-gray-500";

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 border border-gray-700">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-1 truncate">
          {character.name}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className={`w-3 h-3 rounded-full ${statusColor}`}></span>
          <span className="text-gray-300 text-sm">
            {character.status} - {character.species}
          </span>
        </div>
        <div className="text-gray-400 text-sm mb-4">
          <p className="mb-1">Last known location:</p>
          <p className="text-white hover:text-orange-400 transition">
            {character.location.name}
          </p>
        </div>
        <Link
          to={`/characters/${character.id}`}
          className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}