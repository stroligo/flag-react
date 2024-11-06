/* eslint-disable react/prop-types */
function Slider({ sliderValue, onSliderChange }) {
  function handleChange(event) {
    onSliderChange(event.target.value);
  }

  return (
    <>
      <div style={{ padding: '10px 0' }}>
        <input type="range" value={sliderValue} onChange={handleChange} />
      </div>
    </>
  );
}

export default Slider;
