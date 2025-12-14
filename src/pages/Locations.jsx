// src/pages/Locations.jsx
import { useState, useEffect } from "react";
import { getLocations } from "../services/api";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    getLocations(page)
      .then((data) => {
        setLocations(data.results || []);
        setTotalPages(data.info?.pages || 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
        setLoading(false);
      });
  }, [page]);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Locations</h2>

      {loading ? (
        <div className="text-center text-blue-400 text-2xl mt-10">Loading locations...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:bg-gray-750 transition duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">{loc.name}</h3>
                <div className="text-gray-400 space-y-1">
                  <p><span className="text-gray-500">Type:</span> {loc.type}</p>
                  <p><span className="text-gray-500">Dimension:</span> {loc.dimension}</p>
                  <p><span className="text-gray-500">Residents:</span> {loc.residents.length}</p>
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
              Page <span className="text-blue-400 font-bold">{page}</span> of {totalPages}
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