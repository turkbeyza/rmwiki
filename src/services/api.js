// src/services/api.js
const BASE_URL = "https://rickandmortyapi.com/api";

async function fetchFromApi(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export const getCharacters = async (page = 1, name = "") => {
  const query = name ? `&name=${name}` : "";
  return await fetchFromApi(`/character/?page=${page}${query}`);
};

export const getCharacterById = async (id) => {
  return await fetchFromApi(`/character/${id}`);
};

export const getEpisodes = async (page = 1) => {
  return await fetchFromApi(`/episode/?page=${page}`);
};

export const getLocations = async (page = 1) => {
  return await fetchFromApi(`/location/?page=${page}`);
};