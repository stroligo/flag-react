/* ========= PÁGINA SINGLE ========= */
// Captura o ID do Pokémon da URL
const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('ID'); // Captura o valor do parâmetro 'ID'

const pokemonTypesWithImages = [
  {
    type: 'normal',
    img: './src/img/types/normal.png',
  },
  {
    type: 'fire',
    img: './src/img/types/fire.png',
  },
  {
    type: 'water',
    img: './src/img/types/water.png',
  },
  {
    type: 'grass',
    img: './src/img/types/grass.png',
  },
  {
    type: 'electric',
    img: './src/img/types/electric.png',
  },
  {
    type: 'ice',
    img: './src/img/types/ice.png',
  },
  {
    type: 'fighting',
    img: './src/img/types/fighting.png',
  },
  {
    type: 'poison',
    img: './src/img/types/poison.png',
  },
  {
    type: 'ground',
    img: './src/img/types/ground.png' /*  Nao achei */,
  },
  {
    type: 'flying',
    img: './src/img/types/flying.png',
  },
  {
    type: 'psychic',
    img: './src/img/types/psychic.png',
  },
  {
    type: 'bug',
    img: './src/img/types/bug.png',
  },
  {
    type: 'rock',
    img: './src/img/types/rock.png',
  },
  {
    type: 'ghost',
    img: './src/img/types/ghost.png',
  },
  {
    type: 'dragon',
    img: './src/img/types/dragon.png',
  },
  {
    type: 'dark',
    img: './src/img/types/dark.png',
  },
  {
    type: 'steel',
    img: './src/img/types/steel.png',
  },
  {
    type: 'fairy',
    img: './src/img/types/fairy.png',
  },
];

/* Função que carrega os detalhes do Pokémon com base no ID */
async function getPokemonDetails(pokemonId) {
  try {
    // Faz a requisição à API para obter os detalhes do Pokémon
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    );
    if (!response.ok) {
      throw new Error(`Erro ao carregar dados: ${response.statusText}`);
    }
    return await response.json(); // Retorna os detalhes do Pokémon
  } catch (error) {
    console.error('Erro ao carregar os detalhes do Pokémon:', error);
    return null;
  }
}

/* Função que exibe os detalhes do Pokémon na página "details.html" */
getPokemonDetails(pokemonId).then((pokemonData) => {
  const imgFrontDefault = pokemonData.sprites.front_default;
  const dreamWorldSprite = pokemonData.sprites.other.dream_world.front_default; // Sprite da dream_world

  /*   const imgBackDefault = pokemonData.sprites.back_default; */

  function validaImg(img) {
    if (dreamWorldSprite !== null) {
      return (img = dreamWorldSprite);
    } else {
      return (img = imgFrontDefault);
    }
  }

  /* Name */
  document.getElementById('pokemonName').innerHTML = pokemonData.name;
  /* Img */
  document.getElementById(
    'pokemonImg',
  ).innerHTML = `<img src="${validaImg()}" alt="${pokemonData.name}">`;
  document.getElementById('pokemonAltura').innerHTML = (
    pokemonData.height / 10
  ).toFixed(1);
  /* Peso */
  document.getElementById('pokemonPeso').innerHTML = (
    pokemonData.weight / 10
  ).toFixed(1);
  // Preenchendo as habilidades
  document.getElementById('pokemonAbilities').innerHTML = pokemonData.abilities
    .map((abilityInfo) => abilityInfo.ability.name)
    .join(', ');
  // Preenchendo as estatísticas
  document.getElementById('pokemonHP').innerHTML =
    pokemonData.stats[0].base_stat; // HP
  document.getElementById('pokemonAttack').innerHTML =
    pokemonData.stats[1].base_stat; // Ataque
  document.getElementById('pokemonDefense').innerHTML =
    pokemonData.stats[2].base_stat; // Defesa
  document.getElementById('pokemonSpeed').innerHTML =
    pokemonData.stats[5].base_stat; // Velocidade

  const pokemonTypeTest = document.getElementById('pokemonTypes');
  pokemonData.types.forEach((typeInfo) => {
    // Encontrar o tipo de Pokémon correspondente
    const typeObj = pokemonTypesWithImages.find(
      (type) => type.type === typeInfo.type.name,
    );
    if (typeObj) {
      const typeElement = document.createElement('span');
      typeElement.classList.add('typeElement');
      typeElement.innerHTML = `
            <img src="${typeObj.img}" alt="${typeObj.type}" >
          `;
      pokemonTypeTest.appendChild(typeElement);
    }
  });

  /* Fim do codigo */
});
