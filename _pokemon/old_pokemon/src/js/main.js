/* ========= PÁGINA HOME ========= */
/* Variáveis de controle para paginação */
let offset = 0;
const limit = 30;

/* Função que carrega a lista de Pokémon */
async function getPokemonsList(offset, limit) {
  try {
    // Faz a requisição à API para obter os Pokémons com paginação
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    );
    if (!response.ok) {
      throw new Error(`Erro ao carregar dados: ${response.statusText}`);
    }
    // Retorna os dados do JSON
    return await response.json();
  } catch (error) {
    console.error('Erro ao carregar o arquivo JSON:', error);
    return null; // Retorna null em caso de erro
  }
}
/* Função que monta a lista de Pokémon na página inicial */
function montaListaPokemon(pokemonData) {
  const pokemonList = document.getElementById('pokemonList'); // Seleciona o elemento da lista no HTML
  pokemonList.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

  // Itera sobre os resultados da API e cria um item para cada Pokémon
  pokemonData.results.forEach((pokemon) => {
    const item = document.createElement('li'); // Cria o elemento <li>
    item.classList.add('pokemon'); // Adiciona a classe 'pokemon' ao item

    const url = pokemon.url; // URL com detalhes do Pokémon
    const id = url.split('/')[url.split('/').length - 2]; // Extrai o ID da URL

    // Insere o nome e o ID no item e adiciona na lista
    const link = document.createElement('a');
    link.href = `details.html?ID=${id}`;
    link.innerHTML = `${id}: ${pokemon.name}`;
    item.appendChild(link);

    pokemonList.appendChild(item); // Adiciona o item à lista
  });
}
/* Função que controla a navegação entre páginas */
function controlaListaPokemon(pokemonData) {
  const nextBtn = document.getElementById('nextBtn');
  const previousBtn = document.getElementById('previousBtn');
  const page = document.getElementById('page');
  const totalPages = document.getElementById('totalPages');

  totalPages.innerHTML = Math.ceil(pokemonData.count / limit);

  // Controla a navegação entre as páginas
  nextBtn.addEventListener('click', () => {
    if (offset + limit < pokemonData.count) {
      offset += limit; // Atualiza o offset para ir para a próxima página
      getPokemonsList(offset, limit).then((pokemonData) => {
        montaListaPokemon(pokemonData); // Passa os dados carregados para a função
      });
      page.innerHTML = offset / limit + 1; // Atualiza o número da página atual
    }
  });
  previousBtn.addEventListener('click', () => {
    if (offset >= limit) {
      offset -= limit; // Atualiza o offset para voltar para a página anterior
      getPokemonsList(offset, limit).then((pokemonData) => {
        montaListaPokemon(pokemonData); // Passa os dados carregados para a função
      });
      page.innerHTML = offset / limit + 1; // Atualiza o número da página atual
    }
  });
}

// Carrega os dados da API e, quando estiver pronto, monta a lista e controla a navegação
getPokemonsList(offset, limit).then((pokemonData) => {
  montaListaPokemon(pokemonData); // Passa os dados carregados para a função
  controlaListaPokemon(pokemonData);
});
