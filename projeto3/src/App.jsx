import { useState } from 'react';
import Input from './components/Input/Input';

function App() {
  const [count, setCount] = useState(0);

  function newValue(value) {
    setCount(count + value);
  }

  return (
    <>
      <section>
        <div className="container mx-auto px-5 py-10 md:px-0">
          <div className="flex flex-col gap-8">
            <div className="text-4xl font-bold text-blue-700">Projeto 3</div>
            <div className="">
              <Input />
            </div>
            <div>
              <div className="">Valor {count}</div>
            </div>
            <div className="flex gap-4">
              <button className="btn" onClick={() => newValue(10)}>
                +10
              </button>
              <button className="btn" onClick={() => newValue(1)}>
                +1
              </button>
              <button className="btn" onClick={() => newValue(-1)}>
                -1
              </button>
              <button className="btn" onClick={() => newValue(-10)}>
                -10
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
