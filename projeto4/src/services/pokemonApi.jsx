const api = {
  getPokemonsList: async (offset = 0, limit = 25) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    );
    const data = await response.json();
    return data.results;
  },

  getPokemonDetails: async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  },
};

export default api;
