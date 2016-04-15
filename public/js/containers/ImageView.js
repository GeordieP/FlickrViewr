import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

let ImageViewShape = React.createClass({
	render() {
		return (
			<div className="viewArea">
				<div className="viewArea--controls">
					<Link to="/"><p>&lt;-- Back to results</p></Link>
					<a href={this.props.image.url_o} target="_blank"> | Full Size</a>
					<a href={ 'https://www.flickr.com/photos/' + this.props.image.owner + '/' + this.props.image.id + '/' } target="_blank"> | View on Flickr</a>
				</div>
				<div className="viewArea--images">
				<img src={this.props.image.url_z} />
				</div>
			</div>
		)
	}
})

const mapStateToProps = (state, ownProps) => {
	return {
		image: state.imgThumbCollection.images.find((img) => { return img.id === ownProps.params.imageID })
	}
}

let ImageView = connect(mapStateToProps)(ImageViewShape);
export default ImageView;