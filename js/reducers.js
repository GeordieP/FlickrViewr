import * as constants from './constants';
import { combineReducers } from 'redux';

function imgThumbCollection(state = constants.DefaultImgThumbCollectionState, action) {
	switch(action.type) {
		case constants.ActionTypes.updateSearchTerm:
			// ignore change if new search term is the same as the most recent in history
			if (state.searchHistory.length > 0
				&& action.searchTerm === state.searchHistory[0].searchTerm)
				return state;

			let newHistory = [{
					searchTerm: action.searchTerm,
					searchID: action.searchID
				},
				...state.searchHistory
			];

			if (newHistory.length > constants.MaxSearchHistoryLength) newHistory.pop()
			
			return Object.assign({}, state, {
				searchTerm: action.searchTerm,
				searchHistory: newHistory
			});
		case constants.ActionTypes.updateSortBy:
			return Object.assign({}, state, {
				sortBy: action.sortBy,
				imagePageNumber: action.imagePageNumber
			});
		case constants.ActionTypes.loadNextPage:
		case constants.ActionTypes.loadPrevPage:
			return Object.assign({}, state, {
				imagePageNumber: action.imagePageNumber
			})
		case constants.ActionTypes.imageRequestBegin:
		case constants.ActionTypes.imageRequestError:
			return Object.assign({}, state, {
				imagePageNumber: action.imagePageNumber,
				reactJS: {
					isFetching: action.isFetching,
					errorData: action.errorData
				}
			});
		case constants.ActionTypes.imageRequestSuccess:
			return Object.assign({}, state, {
				images: action.receivedData.photos.photo,
				reactJS: {
					isFetching: action.isFetching,
					errorData: action.errorData
				}
			});
		default:
			return state;
	}
}

function imgFullDisplay(state = constants.DefaultImgFullDisplayState, action) {
	switch(action.type) {
		case constants.ActionTypes.selectFullImage:
			return Object.assign({}, state, {
				selectedImage: action.imageID
			});
		case constants.ActionTypes.imageRequestBegin:
		case constants.ActionTypes.imageRequestError:
			return Object.assign({}, state, {
				selectedImage: '',
				reactJS: {
					isFetching: action.isFetching,
					errorData: action.errorData
				}
			});
		case constants.ActionTypes.imageRequestSuccess:
			return Object.assign({}, state, {
				selectedImage: action.receivedData,
				reactJS: {
					isFetching: action.isFetching,
					errorData: action.errorData
				}
			});
		default:
			return state;
	}
}

const FlickrViewr = combineReducers({
	imgThumbCollection,
	imgFullDisplay
});

export default FlickrViewr;