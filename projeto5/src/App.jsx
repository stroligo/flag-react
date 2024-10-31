import { useState } from 'react';
import { Slider } from './components/Slider.jsx';

export function App() {
  const [rangeValue, setRangeValue] = useState(85);

  return (
    <main>
      <section>
        <div className="container mx-auto px-5 py-10 bg-gray-100">
          <div>Range Value: {rangeValue}</div>
          <Slider
            value={Number(rangeValue)}
            onChange={(event) => setRangeValue(event.target.value)}
          />
        </div>
      </section>
    </main>
  );
}
