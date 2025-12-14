// src/pages/Episodes.jsx
import { useState, useEffect } from "react";
import { getEpisodes } from "../services/api";

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    getEpisodes(page)
      .then((data) => {
        setEpisodes(data.results || []);
        setTotalPages(data.info?.pages || 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching episodes:", error);
        setLoading(false);
      });
  }, [page]);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Episodes</h2>

      {loading ? (
        <div className="text-center text-yellow-400 text-2xl mt-10">Loading episodes...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((ep) => (
              <div
                key={ep.id}
                className="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:bg-gray-750 transition duration-300 shadow-lg"
              >
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-xl font-bold text-white">{ep.name}</h3>
                   <span className="bg-gray-700 text-xs px-2 py-1 rounded text-yellow-400 font-mono">{ep.episode}</span>
                </div>
                <div className="text-gray-400 space-y-1">
                  <p><span className="text-gray-500">Air Date:</span> {ep.air_date}</p>
                  <p><span className="text-gray-500">Characters:</span> {ep.characters.length}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-10 gap-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 rounded text-white transition"
            >
              Previous
            </button>
            <span className="text-gray-300">
              Page <span className="text-yellow-400 font-bold">{page}</span> of {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
              disabled={page === totalPages}
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