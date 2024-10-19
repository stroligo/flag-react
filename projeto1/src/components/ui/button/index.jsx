// ui/button/index.jsx
import './index.css';
import PropTypes from 'prop-types';

function Button({ children, onClick, className }) {
  return (
    <>
      <button className={`btn ${className}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
