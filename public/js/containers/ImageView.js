import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

let ImageViewShape = React.createClass({
	ImgUrlFromID (imageID) {
		return this.props.images.find( (img) => {
			return img.id === imageID;
		}).url_z;
	},
	render() {
		return (
			<div className="viewArea">
				<div className="viewArea--controls">
					<Link to="/"><p>◄ Back to results</p></Link><a href="#" target="_blank"> | Original Image</a>
				</div>
				<div className="viewArea--images">
					<img src={this.ImgUrlFromID(this.props.params.imageID)}/>
				</div>
			</div>
		)
	}
})

const mapStateToProps = (state, ownProps) => {
	return {
		images: state.imgThumbCollection.images
	}
}

let ImageView = connect(mapStateToProps)(ImageViewShape);
export default ImageView;