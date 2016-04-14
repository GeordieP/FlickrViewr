import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { loadNextPage, loadPrevPage } from '../actions';

let ResultsViewShape = React.createClass({
	render() {
		if (this.props.images.length < 1)
			return ( <div><h1>No images :(</h1></div> )

		return (
			<div>
			<p>page number: {this.props.imagePageNumber}</p>
			<a href="#" onClick={() => this.props.prevPageClick(this.props.searchTerm, this.props.imagePageNumber)}>Previous Page</a>
			<a href="#" onClick={() => this.props.nextPageClick(this.props.searchTerm, this.props.imagePageNumber)}>Next Page</a>
				{
					this.props.images.map(image =>
					<Link key={image.id} to={ '/image/' + image.id } >
						<img src={image.url_s} />
					</Link>
					)
				}
			</div>
		);
	}
});

const mapStateToProps = (state, ownProps) => {
	return {
		searchTerm: state.imgThumbCollection.searchTerm,
		imagePageNumber: state.imgThumbCollection.imagePageNumber,
		images: state.imgThumbCollection.images
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		nextPageClick: (searchTerm, currentPageNumber) => {
			dispatch(loadNextPage(dispatch, searchTerm, currentPageNumber));
		},
		prevPageClick: (searchTerm, currentPageNumber) => {
			dispatch(loadPrevPage(dispatch, searchTerm, currentPageNumber));
		}
	}
}

let ResultsView = connect(mapStateToProps, mapDispatchToProps)(ResultsViewShape);
export default ResultsView;