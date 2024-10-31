import { useEffect, useState } from 'react';
import api from '../services/pokemonApi';
import Card from './Card';

function PokemonAula() {
  const [pokeList, setPokelist] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState({ name: '' });
  const [offset, setOffset] = useState(0);
  const itensPerPage = 15;

  useEffect(() => {
    api.getPokemonsList(offset, itensPerPage).then((data) => {
      setPokelist(data);

      api.getPokemonDetails(data[0].name).then((details) => {
        setPokemonSelected(details);
      });
    });
  }, [offset]);

  const handleNext = () => {
    setOffset(offset + itensPerPage);
  };
  const handlePrevious = () => {
    if (offset > 0) {
      setOffset(offset - itensPerPage);
    }
  };

  const handlePokemonSelect = (name) => {
    api.getPokemonDetails(name).then((details) => {
      setPokemonSelected(details);
    });
  };

  return (
    <section className="container mx-auto">
      <div className="flex flex-row gap-8">
        <aside className="w-3/12 bg-blue-200 p-6 rounded-lg">
          <div className="font-bold pb-3">Lista:</div>
          <ul className="flex flex-col gap-2">
            {pokeList.map((item) => (
              <li
                className={`hover:text-red-500 cursor-pointer ${
                  item.name === pokemonSelected.name ? 'text-red-500' : ''
                }`}
                key={item.name}
                onClick={() => handlePokemonSelect(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="py-2 my-2 bg-blue-300 p-1 flex justify-between">
            <button onClick={handlePrevious} disabled={offset === 0}>
              Anterior
            </button>
            <button onClick={handleNext}>Próximo</button>
          </div>
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
