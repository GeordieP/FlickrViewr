import React from 'react'
import { render } from 'react-dom'
import SideBar from '../containers/SideBar';
// import ViewArea from '../containers/ViewArea';
import { Router, Route, hashHistory } from 'react-router';
import ResultsView from '../containers/ResultsView';
import ImageView from '../containers/ImageView';

export default React.createClass({
	render() {
		return (
			<div id="outerWrap">
				<div className="logo"></div>
				<div id="contentWrap">
					<SideBar />

					<main>
						<Router history={ hashHistory }>
							<Route path="/" component={ResultsView} />
							<Route path="/image/:imageID" component={ImageView} />
						</Router>
					</main>
				</div>		
			</div>	
		)
	}
});