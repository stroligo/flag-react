import { useState, useEffect } from 'react';
import api from '../services/pokemonApi';

function Mylist() {
  const [pokeList, setPokeList] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState({});

  useEffect(() => {
    api.getPokemonsList().then((data) => setPokeList(data));
  }, []);

  useEffect(() => {
    if (pokeList.length > 0) {
      api
        .getPokemonByName(pokeList[0].name)
        .then((data) => setPokemonSelected(data));
    }
  }, [pokeList]); // Dependência é o estado pokeList, o efeito é executado sempre que ele muda

  const handlePokemonSelect = (name) => {
    api.getPokemonByName(name).then((data) => setPokemonSelected(data));
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="text-3xl underline">Pokelist</div>
      <div className="flex flex-row gap-4 w-full ">
        <div className="flex flex-col gap-2 w-3/12 p-8">
          <ul className="flex flex-col gap-2">
            {pokeList.map((item) => (
              <li
                key={item.name}
                onClick={() => handlePokemonSelect(item.name)}
                className="cursor-pointer hover:bg-gray-200"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className=" w-full p-8">
          <div className="bg-slate-200 w-fit p-6 rounded-lg">
            <div className="text-3xl font-bold">{pokemonSelected.name}</div>
            <div>
              <img
                src={pokemonSelected.sprites?.front_default}
                alt="Pokemon imagem"
              />
            </div>
            <div>Pokemon Peso: {pokemonSelected.weight}</div>
            <div>Pokemon Altura: {pokemonSelected.height}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mylist;
