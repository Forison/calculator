import React from 'react';
import propTypes from 'prop-types';

const Display = ({ result, nextKey, op }) => (
  <div className="displayWrap mb-5">
    <h1 className="results float-right">
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
