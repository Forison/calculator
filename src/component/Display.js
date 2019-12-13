import React, { Component } from 'react';
// import proTypes from 'prop-types';

export class Display extends Component {

	render() {
		return (
			<div className="displayWrap mb-1">
				<h1 className="float-right p-2 results"> {this.props.results}</h1>
			</div>
		)
	}
}
// Display.prototype = {
// 	res: proTypes.array.isRequired
// }
export default Display
