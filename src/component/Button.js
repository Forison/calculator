import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide, clickMe, id }) => (
  <button
    type="button"
    className={`btn orangeColor ${color} ${wide}`}
    onClick={() => clickMe(name)}
    id={`${id}`}
  >
    {name}
  </button>
);
Button.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string.isRequired,
  clickMe: PropTypes.func.isRequired,
};
Button.defaultProps = {
  color: 'orangeColor',
};

export default Button;
