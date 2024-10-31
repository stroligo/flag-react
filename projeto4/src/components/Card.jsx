import PropTypes from 'prop-types';

function Card({ pokemonSelected }) {
  if (!pokemonSelected || typeof pokemonSelected !== 'object') return null;

  const { name, sprites, types, weight } = pokemonSelected;

  return (
    <div className="bg-gray-200 w-fit p-6 rounded-lg flex flex-col gap-2">
      <figure>
        <img src={sprites?.front_default} alt="pokemon" />
      </figure>
      <h3 className="text-3xl">{name}</h3>
      <div>Type:</div>
      <div className="flex gap-2">
        {types?.map((item) => (
          <span
            key={item.type.name}
            className="bg-blue-200 px-2 py-0.5 rounded-xl"
          >
            {item.type.name}
          </span>
        ))}
      </div>
      <div>
        <span className="font-bold">Peso:</span>
        <span> {weight}</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  pokemonSelected: PropTypes.shape({
    name: PropTypes.string,
    sprites: PropTypes.shape({
      front_default: PropTypes.string,
    }),
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    ),
    weight: PropTypes.number,
  }),
};

export default Card;
