import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { loadNextPage, loadPrevPage } from '../actions';

let ResultsViewShape = React.createClass({
	render() {
		if (this.props.images.length < 1)
			return ( <div className="viewArea"><h1>No images :(</h1></div> )

		return (
			<div className="viewArea">
				<div className="viewArea--controls">
					<a href="#" onClick={() => this.props.prevPageClick(this.props.imagePageNumber)}>Previous</a>
					<p>Page {this.props.imagePageNumber}</p>
					<a href="#" onClick={() => this.props.nextPageClick(this.props.imagePageNumber)}>Next</a>
				</div>
				<ul className="viewArea--images">
					{
						this.props.images.map(image =>
						<li key={image.id}>
							<Link to={ '/image/' + image.id } >
								<img src={image.url_s} />
							</Link>
						</li>
						)
					}
				</ul>
			</div>
		);
	}
});

const mapStateToProps = (state, ownProps) => {
	return {
		imagePageNumber: state.imgThumbCollection.imagePageNumber,
		images: state.imgThumbCollection.images
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		nextPageClick: (currentPageNumber) => {
			dispatch(loadNextPage(dispatch, currentPageNumber));
		},
		prevPageClick: (searchTerm, currentPageNumber) => {
			dispatch(loadPrevPage(dispatch, currentPageNumber));
		}
	}
}

let ResultsView = connect(mapStateToProps, mapDispatchToProps)(ResultsViewShape);
export default ResultsView;