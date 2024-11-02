/* eslint-disable react/prop-types */
export function CardProduct({ product: { title, price, thumbnail }, onClick }) {
  console.log(onClick);
  return (
    <div
      className="bg-gray-200 rounded-lg flex flex-col gap-2  p-4 cursor-pointer"
      onClick={onClick}
    >
      <figure className="w-full relative">
        <img
          src={thumbnail}
          className="bg-white min-w-full bg-cover object-cover"
        />
        <div className="absolute bottom-0 text-xs right-0 bg-green-500 text-white p-0.5">
          Preço: {price}
        </div>
      </figure>
      <p className="font-bold text-sm">{title}</p>
    </div>
  );
}
