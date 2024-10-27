import { useState } from 'react';
import PropTypes from 'prop-types';

function Mylist({ listValues }) {
  const [baseList, setBaseList] = useState(listValues);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');

  function changeName(e) {
    setName(e.target.value);
  }

  function changeRating(e) {
    setRating(e.target.value);
  }

  function addValue(e) {
    console.log(e);
    if (name === '' || rating === '') {
      alert('Preencha todos os campos');
    } else {
      const newItem = { name, rating };
      setBaseList([...baseList, newItem]);
      setName('');
      setRating('');
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-2xl border-b ">MyList</div>
        <ul className="flex flex-col gap-2">
          {baseList.map((item) => {
            return (
              <li key={item.name}>
                <span className="font-bold">{item.name}:</span> {item.rating}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col gap-2 bg-gray-200 p-2 w-fit">
          <input
            type="text"
            value={name}
            placeholder="Name"
            className="border border-black p-1"
            onChange={changeName}
          />
          <input
            type="number"
            value={rating}
            placeholder="Rating"
            className="border border-black p-1"
            onChange={changeRating}
          />
          <div>
            {name} {rating}
          </div>
          <button className="btn" type="submit" onClick={addValue}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

Mylist.propTypes = {
  listValues: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      rating: PropTypes.number,
    }),
  ),
};

export default Mylist;
