import React from 'react';
// import { Link } from 'react-router'
import { connect } from 'react-redux';

let ResultsViewShape = React.createClass({
	render() {
		if (this.props.images.length < 1)
			return ( <div><h1>No images :(</h1></div> )

		return (
			<div>
				<img src={this.props.images[0].url_s} />
			</div>
		);
	}
});

const mapStateToProps = (state, ownProps) => {
	return {
		images: state.imgThumbCollection.images
	}
}

let ResultsView = connect(mapStateToProps)(ResultsViewShape);
export default ResultsView;