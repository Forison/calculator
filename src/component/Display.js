import React from 'react';
import propTypes from 'prop-types';

const Display = ({ result, nextKey, op }) => (
  <div className="displayWrap mb-5 shadow-lg">
    <h1 className="results float-right">
      {result}
      {' '}
      {op}
      {' '}
      {nextKey}
    </h1>
  </div>
);
Display.defaultProps = {
  result: '0',
  op: '',
  nextKey: '',
};
Display.propTypes = {
  result: propTypes.string,
  op: propTypes.string,
  nextKey: propTypes.string,
};
export default Display;
