import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
	render() {
		console.log(this.props);
		if (this.props.images.length < 1) return null;

		return (
			<div>
				<img src={this.props.images[0].url_s} />
			</div>		
		)
	}
});