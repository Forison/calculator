import React from 'react';
import propTypes from 'prop-types';

const Display = ({ result, nextKey, op }) => (
  <div className="displayWrap mb-1">
    <h1 className="float-right p-2 results">
      {result} {op} {nextKey}
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
