/* ========= PÁGINA QUIZ ========= */
// Captura o ID do Pokémon da URL
const urlParams = new URLSearchParams(window.location.search);
// const pokemonId = urlParams.get('ID');
let currentPokemonId = randomPokemonId(); // ID do Pokémon inicial
let score = 0; // Inicializa o score

/* Função Conecta API */
async function getPokemonAPI(pokemonId) {
  try {
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
// Função que seleciona Pokémons aleatórios
async function respostasAleatorias(correctPokemon) {
  const randomIds = new Set(); /* cria um array que nao pode conter repetidos */
  randomIds.add(correctPokemon); // Adiciona o nome do Pokemon correto

  while (randomIds.size < 10) {
    const randomId = randomPokemonId();
    if (randomId !== correctPokemon) {
      randomIds.add(randomId);
    }
  }

  const respostasReorganizadas = [];
  for (const id of randomIds) {
    respostasReorganizadas.push(getPokemonAPI(id));
  }

  return Promise.all(respostasReorganizadas);
}
// Função que exibe os detalhes do Pokémon na página
async function carregaPokemon(pokemonId) {
  const pokemonData = await getPokemonAPI(pokemonId);

  if (pokemonData) {
    const imgFrontDefault = pokemonData.sprites.front_default;
    const dreamWorldSprite =
      pokemonData.sprites.other.dream_world.front_default;

    function validaImg() {
      return dreamWorldSprite !== null ? dreamWorldSprite : imgFrontDefault;
    }

    document.getElementById('pokemonName').innerText =
      pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    document.getElementById(
      'pokemonSecret',
    ).innerHTML = `<img src="${validaImg()}" alt="${pokemonData.name}">`;
    escondePokemon();
    const randomPokemons = await respostasAleatorias(pokemonId);
    updateRespostas(randomPokemons, pokemonData.name);
  }
}
// Função que atualiza a lista de respostas
function updateRespostas(pokemons, respostaCerta) {
  const answersElement = document.getElementById('answers');
  answersElement.innerHTML = ''; // Limpa opções anteriores

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
  }

  const embaralhaPokemon = shuffle(pokemons.slice());

  embaralhaPokemon.forEach((pokemon) => {
    const button = document.createElement('button');
    button.innerText =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    // Adiciona evento de clique
    button.onclick = () => clickResposta(respostaCerta);

    // Estilo adicional (opcional)
    button.classList.add('btn');

    // Adiciona o click score se for a resposta certa
    if (
      pokemon.name.trim().toLowerCase() === respostaCerta.trim().toLowerCase()
    ) {
      button.addEventListener('click', () => updateScore());
    }

    answersElement.appendChild(button);
  });
}
// Função que trata o clique na resposta
function clickResposta(respostaCerta) {
  const allButtons = document.querySelectorAll('#answers button');
  const correctText = respostaCerta.trim().toLowerCase(); // Remove espaços e transforma em minúsculas

  allButtons.forEach((button) => {
    const buttonText = button.innerText.trim().toLowerCase(); // Remove espaços e transforma em minúsculas

    if (buttonText === correctText) {
      button.classList.remove('btn');
      button.classList.add('btnCorreta');
    } else {
      button.classList.remove('btn');
      button.classList.add('btnErrada');
    }
    button.style.pointerEvents = 'none'; // Desabilita cliques em todas as opções após a resposta ser dada
  });

  mostraPokemon();
}
// Função que atualiza o score
function updateScore() {
  score += 1;
  const scoreElement = document.getElementById('score');
  scoreElement.innerText = score;

  if (score === 10) {
    alert('Parabéns! Voce acertou 10 respostas e venceu o jogo!');
    score = 0;
    scoreElement.innerText = 0;
  }
}

// Funções auxiliares
function randomPokemonId() {
  return Math.floor(Math.random() * 151) + 1; /* Somente os 151 primeiros */
}
function escondePokemon() {
  document.getElementById('pokemonSecret').classList.add('escondido');
  document.getElementById('pokemonName').classList.add('escondido');
}
function mostraPokemon() {
  document.getElementById('pokemonSecret').classList.remove('escondido');
  document.getElementById('pokemonName').classList.remove('escondido');
}

// Carrega o Pokémon inicial ao abrir a página
carregaPokemon(currentPokemonId);
// Botao para carregar novo pokemon
document.getElementById('nextBtn').onclick = () => {
  escondePokemon();
  carregaPokemon(randomPokemonId());
};
