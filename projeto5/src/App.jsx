import { useState } from 'react';
import Slider from './components/Slider.jsx';

export function App() {
  const [rangeValue, setRangeValue] = useState(5);

  function handleRangeChange(event) {
    setRangeValue(event.target.value);
  }

  function handleSliderChange(value) {
    setRangeValue(value);
  }

  return (
    <>
      <div>Range Value: {rangeValue}</div>
      <input value={rangeValue} onChange={handleRangeChange} />
      <br />
      <Slider sliderValue={rangeValue} onSliderChange={handleSliderChange} />
    </>
  );
}
