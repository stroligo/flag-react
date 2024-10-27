import { useState } from 'react';
import UiButton from './components/ui/button';
import Card from './components/cards';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-3xl font-bold mb-2 flex justify-center">
        <figure>
          <img
            src="assets/img/the_simpsons_logo.svg"
            alt="logo"
            className="w-[300px]"
          />
        </figure>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-4 gap-8">
          <Card
            image="assets/img/homer.png"
            title="Hommer Simpson"
            texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat."
            onClick={(event) => {
              console.log(event.target);
            }}
          />
          <Card
            image="assets/img/bart.png"
            title="Bart Simpson"
            texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat."
            onClick={() => setCount((count) => count + 1)}
          />
          <Card
            image="assets/img/lisa.png"
            title="Lisa Simpson"
            texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat."
            onClick={() => setCount((count) => count + 1)}
          />
          <Card
            image="assets/img/marge.png"
            title="Marge Simpson"
            texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat."
            onClick={() => setCount((count) => count + 1)}
          />
          <Card
            image="assets/img/mag.png"
            title="Maggy Simpson"
            texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat."
            onClick={() => setCount((count) => count + 1)}
          />
        </div>
        <div className="py-4">{count}</div>
        <div className="flex gap-2 justify-center py-4">
          <UiButton
            onClick={() => setCount((count) => count + 1)}
            className="green"
          >
            <span>Add +1</span>
          </UiButton>
          <UiButton
            onClick={() => setCount((count) => count - 1)}
            className="red"
          >
            <span>Sub -1</span>
          </UiButton>
        </div>
      </div>
    </>
  );
}

export default App;
