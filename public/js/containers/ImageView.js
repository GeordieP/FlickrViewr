import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

let ImageViewShape = React.createClass({
	render() {
		return (
			<div className="viewArea">
				<div className="viewArea--controls">
					<Link to="/"><p>&lt;&lt; Back to results</p></Link>
					{/* Link to the largest available image we have the URL to without asking flickr for more. Not important enough feature to request all URLs */}
					<a href={this.props.image.url_o || this.props.image.url_c || this.props.image.url_s} target="_blank"> | Open in new tab</a>
					<a href={'https://www.flickr.com/photos/' + this.props.image.owner + '/' + this.props.image.id + '/'} target="_blank"> | View on Flickr</a>
				</div>
				<div className="viewArea--images">
				{/* Use the _c size if it's available for this image, otherwise use the _s which is.. probably guarenteed to exist? I hope? */}
				<img src={this.props.image.url_c || this.props.image.url_s} />
				</div>
			</div>
		)
	}
})

const mapStateToProps = (state, ownProps) => {
	return {
		image: state.imgThumbCollection.images.find((img) => {return img.id === ownProps.params.imageID})	// only pass down the single image we care about
	}
}

let ImageView = connect(mapStateToProps)(ImageViewShape);
export default ImageView;