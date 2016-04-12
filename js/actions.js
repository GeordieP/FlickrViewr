import * as constants from './constants';

export function updateSearchTerm(dispatch, searchTerm) {

	//dispatch(imageRequestBegin(dispatch, /* get image list from api */ ));

	return {
		type: constants.ActionTypes.updateSearchTerm,
		searchTerm: searchTerm,
		searchID: Date.now()				// use date.now as unique ID. Not very robust, but it works for this simple app
	}
}

export function updateSortBy(sortBy) {
	return {
		type: constants.ActionTypes.updateSortBy,
		sortBy: sortBy
	}
}

export function selectFullImage(imageID) {

	//dispatch(imageRequestBegin(dispatch, /* get full image from api if necessary */ ));

	return {
		type: constants.ActionTypes.selectFullImage,
		imageID: imageID
	}
}

export function imageRequestBegin(dispatch, url) {
	return {
		type: constants.ActionTypes.imageRequestBegin,
		isFetching: true,
		errorData: '',
	}
}

export function imageRequestSuccess(dispatch, receivedData) {
	return {
		type: constants.ActionTypes.imageRequestSuccess,
		isFetching: false,
		errorData: '',
		receivedData: receivedData
	}
}

export function imageRequestError(dispatch, receivedData) {
	return {
		type: constants.ActionTypes.imageRequestError,
		isFetching: false,
		errorData: receivedData
	}
}