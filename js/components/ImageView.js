import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
	render() {
		return (
			<div>
				<Link to="/results/1234">go to /results/1234</Link>
			</div>
		)
	}
});