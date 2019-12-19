import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide, clickMe }) => (
  <button type="button"className={`btn orangeColor ${color} ${wide}`} onClick={(e)=>clickMe(name)} >
    {name}
  </button>
);
Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string.isRequired,
};
Button.defaultProps = {
  color: 'orangeColor',
};

export default Button;
