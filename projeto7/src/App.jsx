import { useState } from 'react';

export function App() {
  const [names, setNames] = useState(['pedro', 'maria', 'joao']);
  const [newName, setNewName] = useState('');
  const [namesDeleted, setNamesDeleted] = useState([]);

  function addName() {
    setNames([...names, newName]);
    setNewName(''); // limpa o input após adicionar o nome
  }

  function handleChange(event) {
    setNewName(event.target.value);
  }

  function removeName(nameToRemove) {
    setNames(names.filter((name) => name !== nameToRemove));
    setNamesDeleted([...namesDeleted, nameToRemove]);
  }

  function restoreName(nameToRestore) {
    setNames([...names, nameToRestore]);
    setNamesDeleted(namesDeleted.filter((name) => name !== nameToRestore));
  }

  function deleteDefinitively(nameToDelete) {
    setNamesDeleted(namesDeleted.filter((name) => name !== nameToDelete));
  }

  return (
    <div>
      <h1>App</h1>
      <div>Nome a ser adicionado: {newName}</div>
      <input type="text" value={newName} onChange={handleChange} />
      <button onClick={addName}>ADD NAME</button>
      <h2>Nomes atuais:</h2>
      {names.map((name) => (
        <div key={name}>
          {name} <button onClick={() => removeName(name)}>Remover</button>
        </div>
      ))}
      <h2>Nomes deletados:</h2>
      {namesDeleted.map((name) => (
        <div key={name}>
          {name}
          <button onClick={() => restoreName(name)}>Restaurar</button>
          <button onClick={() => deleteDefinitively(name)}>
            Excluir definitivamente
          </button>
        </div>
      ))}
    </div>
  );
}
