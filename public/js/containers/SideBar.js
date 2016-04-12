import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateSearchTerm } from '../actions';
import SearchBox from '../components/SearchBox';
import SearchHistory from '../components/SearchHistory';

let SideBarShape = ({ searchHistory, onUpdateSearchTerm }) => (
// let SideBarShape = ({ searchHistory, updateSearchTerm }) => {

	<aside>
		<SearchBox onUpdateSearchTerm={onUpdateSearchTerm} />
		<SearchHistory searchHistory={searchHistory} onUpdateSearchTerm={onUpdateSearchTerm} />
	</aside>
);

SideBarShape.propTypes = {
	searchHistory: PropTypes.array.isRequired,
	onUpdateSearchTerm: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
	return {
		searchHistory: state.imgThumbCollection.searchHistory
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onUpdateSearchTerm: (searchTerm) => {
			dispatch(updateSearchTerm(dispatch, searchTerm))
		}
	}
}

let SideBar = connect(mapStateToProps, mapDispatchToProps)(SideBarShape);
export default SideBar;