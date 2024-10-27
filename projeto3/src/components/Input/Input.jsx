import { useState } from 'react';

function Input() {
  const [name, setName] = useState('Inicial');
  const [date, setDate] = useState(`2024-01-01`);

  function btnClick() {
    alert(`Bem vindo ${name}, ${date}`);
  }

  return (
    <>
      <div className="flex gap-4 flex-col w-fit">
        <div>Nome: {name}</div>
        <input
          type="text"
          defaultValue={name}
          placeholder="Digite seu nome"
          className="border border-gray-200 p-1"
          onChange={(e) => setName(e.target.value)}
        />
        <div>Idade: {date}</div>
        <input
          type="date"
          defaultValue={date}
          className="border border-gray-200 p-1"
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="btn" onClick={btnClick}>
          Ok
        </button>
      </div>
    </>
  );
}

export default Input;
