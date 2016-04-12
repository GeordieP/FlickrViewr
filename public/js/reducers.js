import * as constants from './constants';
import { combineReducers } from 'redux';

function imgThumbCollection(state = {}, action) {
	switch(action.type) {
		case constants.ActionTypes.updateSearchTerm:
			// - update searchTerm
			// - push to searchHistory
			// - update reactJS.isFetching and errorData
		case constants.ActionTypes.updateSortBy:
			// - update sortBy
			// - re-order images array
		case constants.ActionTypes.imageRequestBegin:
			// - update reactJS.isFetching
		case constants.ActionTypes.imageRequestSuccess:
			// - update images array			
		case constants.ActionTypes.imageRequestError:
			// - update reactJS.isFetching
			// - update reactJS.errorData
		default:
			return state;
	}
}

function imgFullDisplay(state = {}, action) {
	switch(action.type) {
		case constants.ActionTypes.selectFullImage:
			// - update selectedImage
		case constants.ActionTypes.imageRequestBegin:
			// - update selectedImage (to null?)
			// - update reactJS.isFetching
		case constants.ActionTypes.imageRequestSuccess:
			// - update selectedImage		
		case constants.ActionTypes.imageRequestError:
			// - update reactJS.isFetching
			// - update reactJS.errorData
		default:
			return state;
	}
}

const FlickrViewr = combineReducers({
	imgThumbCollection,
	imgFullDisplay
});

export default FlickrViewr;