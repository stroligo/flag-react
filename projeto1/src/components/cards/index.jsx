// cards/index.jsx
import './index.css';
import PropTypes from 'prop-types';

function Card({ image, title, texto, onClick, className }) {
  return (
    <>
      <div className={`card ${className}`} onClick={onClick}>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="title">{title}</div>
        <div className="texto">{texto}</div>
      </div>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  texto: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
