import * as constants from './constants';
import { combineReducers } from 'redux';

function imgThumbCollection(state = constants.DefaultImgThumbCollectionState, action) {
	switch(action.type) {
		case constants.ActionTypes.updateSearchTerm:
			return Object.assign({}, state, {
				searchTerm: action.searchTerm,
				searchHistory: [...state.searchHistory, action.searchTerm]
			});
		case constants.ActionTypes.updateSortBy:
			return Object.assign({}, state, {
				sortBy: state.sortBy
			});
		case constants.ActionTypes.imageRequestBegin:
		case constants.ActionTypes.imageRequestError:
			return Object.assign({}, state, {
				reactJS: {
					isFetching: state.isFetching,
					errorData: state.errorData
				}
			});
		case constants.ActionTypes.imageRequestSuccess:
			return Object.assign({}, state, {
				images: action.receivedData,
				reactJS: {
					isFetching: state.isFetching,
					errorData: state.errorData
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
					isFetching: state.isFetching,
					errorData: state.errorData
				}
			});
		case constants.ActionTypes.imageRequestSuccess:
			return Object.assign({}, state, {
				selectedImage: action.receivedData,
				reactJS: {
					isFetching: state.isFetching,
					errorData: state.errorData
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