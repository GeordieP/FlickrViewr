import React from 'react';
// import { Link } from 'react-router'
import { connect } from 'react-redux';

let ImageViewShape = React.createClass({
	render() {
		return (
			<div>
				<img /> {/* display selected full image */}
			</div>
		)
	}
})

const mapStateToProps = (state, ownProps) => {
	return {}
}

let ImageView = connect(mapStateToProps)(ImageViewShape);
export default ImageView;