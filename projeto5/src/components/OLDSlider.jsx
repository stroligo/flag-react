export function Slider({ value, onChange }) {
  return (
    <div className="py-10">
      <input type="range" value={value} onChange={onChange} />
    </div>
  );
}
