import { useEffect, useState } from 'react';
import api from '../services/pokemonApi';
import Card from './Card';

function PokemonAula() {
  const [pokeList, setPokelist] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState([]);

  useEffect(() => {
    api.getPokemonsList().then((data) => setPokelist(data));
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
    <section className="container mx-auto">
      <div className="flex flex-row gap-8">
        <aside className="w-3/12 bg-blue-200 p-6 rounded-lg">
          <div className="font-bold pb-3">Lista:</div>
          <ul className="flex flex-col gap-2">
            {pokeList.map((item) => (
              <li
                className="hover:text-red-500 cursor-pointer"
                key={item.name}
                onClick={() => handlePokemonSelect(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </aside>
        <div className=" bg-gray-100 w-full p-6 rounded-lg">
          <div className="font-bold pb-3">Pokemon Selected:</div>

          <Card pokemonSelected={pokemonSelected} />
        </div>
      </div>
    </section>
  );
}

export default PokemonAula;
