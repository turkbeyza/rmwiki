// src/pages/CharacterDetail.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCharacterById } from "../services/api";

export default function CharacterDetail() {
  const { id } = useParams(); 
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCharacterById(id)
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching detail:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center text-green-400 text-2xl mt-10">Loading character details...</div>;
  }

  if (!character) {
    return <div className="text-center text-red-500 text-2xl mt-10">Character not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/characters" className="text-gray-400 hover:text-white mb-4 inline-block">
        &larr; Back to Characters
      </Link>

      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {}
        <div className="md:w-1/3">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover"
          />
        </div>

        {}
        <div className="p-8 md:w-2/3 text-white">
          <h1 className="text-4xl font-bold text-green-400 mb-2">{character.name}</h1>
          
          <div className="flex items-center gap-2 mb-6">
            <span className={`w-3 h-3 rounded-full ${character.status === 'Alive' ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span className="text-xl text-gray-300">
              {character.status} - {character.species}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
            <div>
              <span className="text-gray-400 block text-sm">Gender:</span>
              <span>{character.gender}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-sm">Origin:</span>
              <span>{character.origin?.name}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-sm">Last Location:</span>
              <span>{character.location?.name}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-sm">Episodes:</span>
              <span>Appears in {character.episode.length} episodes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}