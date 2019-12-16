import React from 'react';
import Button from './Button';
import propTypes from 'prop-types';

const Bpanel = ({ butName }) => (
	<div>
		<Button butId={butName} />
	</div>
);
;
Button.propTypes = {
	butName: propTypes.array.isRequired,
};
export default Bpanel;
