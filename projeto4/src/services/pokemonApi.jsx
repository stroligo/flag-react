const api = {
  getPokemonsList: async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();
    return data.results;
  },

  getPokemonByName: async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  },
};

export default api;
