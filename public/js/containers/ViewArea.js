import React from 'react';
import ResultsView from '../components/ResultsView';
import ImageView from '../components/ImageView';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

export default React.createClass({
	render() {
		return (
			<main>
				<Router history={ hashHistory }>
					<Route path="/" component={ResultsView} />
					<Route path="/results" component={ResultsView} />
					<Route path="/results/:searchTerm" component={ResultsView} />
					<Route path="/image" component={ImageView} />
					<Route path="/image/:imageID" component={ImageView} />
				</Router>
			</main>
		)
	}
});