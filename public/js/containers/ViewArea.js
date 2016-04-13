import React from 'react';
import ResultsView from '../components/ResultsView';
import ImageView from '../components/ImageView';
import { connect } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

let ViewAreaShape = React.createClass({
	render() {
		return (
			<main>
				<ResultsView images={this.props.images} />
			</main>
		);
		// return (
		// 	<main>
		// 		<Router history={ hashHistory }>
		// 			<Route path="/" component={ResultsView} />
		// 			<Route path="/results" component={ResultsView} />
		// 			<Route path="/results/:searchTerm" component={ResultsView} />
		// 			<Route path="/image" component={ImageView} />
		// 			<Route path="/image/:imageID" component={ImageView} />
		// 		</Router>
		// 	</main>
		// )
	}
});

const mapStateToProps = (state, ownProps) => {
	return {
		images: state.imgThumbCollection.images
	}
}

let ViewArea = connect(mapStateToProps)(ViewAreaShape);
export default ViewArea;