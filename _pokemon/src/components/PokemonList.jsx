import { useState, useEffect } from 'react';

function Mylist() {
  const [pokeList, setpokeList] = useState([]);
  const [input, setInput] = useState('');

  async function getPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();

    setpokeList(data.results);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  function changeInput(e) {
    setInput(e.target.value);
  }
  function addValue(e) {
    e.preventDefault(); // prevenir o comportamento padrão do formulário
    setpokeList([...pokeList, input]);
    setInput('');
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Pokemon List</div>
        <ul className="flex flex-col gap-2">
          {pokeList.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
        <form
          className="flex flex-col gap-2 bg-gray-200 p-2 w-fit"
          onSubmit={addValue}
        >
          <input
            type="text"
            value={input} // usar value em vez de defaultValue
            placeholder="Add new item"
            className="border border-black p-1"
            onChange={changeInput}
          />
          <button className="btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
export default Mylist;
