// src/pages/Characters.jsx
import { useState, useEffect } from "react";
import { getCharacters } from "../services/api";
import CharacterCard from "../components/CharacterCard";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      getCharacters(page, search)
        .then((data) => {
          setCharacters(data.results || []);
          setTotalPages(data.info?.pages || 1);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching characters:", error);
          setLoading(false);
        });
    }, 300); 

    return () => clearTimeout(timer);
  }, [page, search]);

  
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1); 
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold text-green-400">Characters</h2>
        <input
          type="text"
          placeholder="Search characters..."
          value={search}
          onChange={handleSearch}
          className="bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:border-green-500 transition"
        />
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center text-2xl text-green-400 mt-10">
          Loading portal data...
        </div>
      ) : (
        <>
          {/* Character Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {characters.length > 0 ? (
              characters.map((char) => (
                <CharacterCard key={char.id} character={char} />
              ))
            ) : (
              <p className="text-gray-400 text-xl col-span-full text-center">
                No characters found in this dimension.
              </p>
            )}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-10 gap-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 rounded text-white transition"
            >
              Previous
            </button>
            <span className="text-gray-300">
              Page <span className="text-green-400 font-bold">{page}</span> of {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => Math.max(prev + 1, totalPages))} // Limit removed slightly for UX, API handles limit usually, but safer logic: Math.min(prev + 1, totalPages)
              disabled={page >= totalPages}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 rounded text-white transition"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}