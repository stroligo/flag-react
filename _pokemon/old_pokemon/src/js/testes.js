async function getPokemonListaAPI() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const data = await response.json();

  montaPokemonList(data);
  getPokemonDetailsAPI(data.results[0].name);

  return data;
}

async function getPokemonDetailsAPI(pokemonId) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
  );
  const data = await response.json();

  montaPokeDetails(data);

  return data;
}

function montaPokemonList(pokemonData) {
  const pokemonList = document.getElementById('pokemonList');
  pokemonList.innerHTML = '';

  // Itera sobre os resultados da API e cria um item para cada pokemon
  for (let i = 0; i < pokemonData.results.length; i++) {
    const pokemon = pokemonData.results[i];
    const item = document.createElement('li');
    item.classList.add('pokemon');
    const url = pokemon.url;
    const id = url.split('/')[url.split('/').length - 2];
    const name = document.createElement('span');
    name.innerHTML = `${id}: ${pokemon.name}`;
    item.appendChild(name);
    pokemonList.appendChild(item);

    /*  Cria o click */
    item.addEventListener('click', async () => {
      const data = await getPokemonDetailsAPI(id);
      montaPokeDetails(data);
    });
  }
}

function montaPokeDetails(pokemonData) {
  const pokedetails = document.getElementById('pokedetails');
  pokedetails.innerHTML = pokemonData.name + ' - ' + pokemonData.id;
}

// Chame a função getPokemonListaAPI e espere que a promessa seja resolvida
getPokemonListaAPI();
