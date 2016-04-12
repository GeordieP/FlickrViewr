import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
	render() {
		return (
			<div>
				<Link to="/image/1234">go to /image/1234</Link>
			</div>		
		)
	}
});