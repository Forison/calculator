import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => {
  return (
    <button type="button" className="btn btn-secondary">
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
