import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { loadNextPage, loadPrevPage } from '../actions';

let ResultsViewShape = React.createClass({
	render() {
		// make sure to display error data if we receive any
		if (this.props.errorData)
			return (
				<div className="viewArea">
					<div class="viewArea--errorData">{this.props.errorData}</div>
				</div>
			)

		// display a spinner if a request is in progress
		if (this.props.isFetching)
			return ( 
				<div className="viewArea">
					<div class="loading-spinner"></div>
				</div>
			)

		// display a message if the images array isn't populated (default state, or invalid search term)
		if (this.props.images.length < 1)
			return (
				<div className="viewArea">
					<div className="viewArea--noImg">
						<h1>No image results :(</h1>
						<h2>Enter a new search term to find some!</h2>
					</div>
				</div>
			)

		return (
			<div className="viewArea">
				<div className="viewArea--controls">
					<a href="#" onClick={(e) => this.props.prevPageClick(e, this.props.imagePageNumber)}>&lt;&lt;</a>
					<p>Page {this.props.imagePageNumber}</p>
					<a href="#" onClick={(e) => this.props.nextPageClick(e, this.props.imagePageNumber)}>&gt;&gt;</a>
				</div>
				<ul className="viewArea--images">
					{
						this.props.images.map(image =>
							<li key={image.id}>
								<Link to={'/image/' + image.id} >
									<img src={image.url_s} />
								</Link>
							</li>
						)
					}
				</ul>
			</div>
		)
	}
});

const mapStateToProps = (state, ownProps) => {
	return {
		errorData: state.imgThumbCollection.reactJS.errorData,
		isFetching: state.imgThumbCollection.reactJS.isFetching,
		imagePageNumber: state.imgThumbCollection.imagePageNumber,
		images: state.imgThumbCollection.images
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		nextPageClick: (e, currentPageNumber) => {
			e.preventDefault();
			dispatch(loadNextPage(dispatch, parseInt(currentPageNumber)));
		},
		prevPageClick: (e, currentPageNumber) => {
			e.preventDefault();
			if (currentPageNumber > 1)
				dispatch(loadPrevPage(dispatch, currentPageNumber));
		}
	}
}

let ResultsView = connect(mapStateToProps, mapDispatchToProps)(ResultsViewShape);
export default ResultsView;