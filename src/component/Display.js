import React from 'react';
import propTypes from 'prop-types';

const Display = ({ result}) => (
  <div className="displayWrap mb-1">
    <h1 className="float-right p-2 results">
      {result}
    </h1>
  </div>
);
Display.defaultProps = {
  result: '0',
};
Display.propTypes = {
  result: propTypes.string,
};
export default Display;
