import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateSortBy, updateSearchTerm } from '../actions';
import SearchBox from '../components/SearchBox';
import SearchHistory from '../components/SearchHistory';
import SortDropDown from '../components/SortDropDown';

let SideBarShape = ({ onUpdateSortMethod, onUpdateSearchTerm, searchHistory }) => (
	<aside>
		<SortDropDown onUpdateSortMethod={onUpdateSortMethod} />
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
	console.log(ownProps);
	return {
		onUpdateSortMethod: (newMethod) => {
			dispatch(updateSortBy(dispatch, newMethod));
		},
		onUpdateSearchTerm: (searchTerm) => {
			dispatch(updateSearchTerm(dispatch, searchTerm))
		}
	}
}

let SideBar = connect(mapStateToProps, mapDispatchToProps)(SideBarShape);
export default SideBar;