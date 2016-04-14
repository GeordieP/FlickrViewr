import * as constants from './constants';
import { SendGetReq, FlickrPhotoSearchURLBuilder } from './apis'

export function updateSearchTerm(dispatch, searchTerm) {
	dispatch(imageRequestBegin(dispatch, FlickrPhotoSearchURLBuilder(searchTerm)));

	return {
		type: constants.ActionTypes.updateSearchTerm,
		searchTerm: searchTerm,
		searchID: Date.now()				// use date.now as unique ID. Not very robust, but it works for this simple app
	}
}

export function updateSortBy(dispatch, sortBy) {
	dispatch(imageRequestBegin(dispatch, FlickrPhotoSearchURLBuilder(void 0, void 0, sortBy)));

	return {
		type: constants.ActionTypes.updateSortBy,
		sortBy: sortBy,
		imagePageNumber: 1
	}
}

export function selectFullImage(imageID) {
	return {
		type: constants.ActionTypes.selectFullImage,
		imageID: imageID
	}
}

export function loadNextPage(dispatch, currentPageNumber) {
	let newPageNumber = ++currentPageNumber;
	dispatch(imageRequestBegin(dispatch, FlickrPhotoSearchURLBuilder(void 0, newPageNumber)));

	return {
		type: constants.ActionTypes.loadNextPage,
		imagePageNumber: newPageNumber
	}
}

export function loadPrevPage(dispatch, currentPageNumber) {

	let newPageNumber = --currentPageNumber;
	dispatch(imageRequestBegin(dispatch, FlickrPhotoSearchURLBuilder(void 0, newPageNumber)));

	return {
		type: constants.ActionTypes.loadPrevPage,
		imagePageNumber: newPageNumber
	}
}

export function imageRequestBegin(dispatch, url) {
	SendGetReq(url,
		(successData) => {
			dispatch(imageRequestSuccess(successData));
		},
		(errorData) => {
			dispatch(imageRequestError(errorData));
		}
	);

	return {
		type: constants.ActionTypes.imageRequestBegin,
		isFetching: true,
		imagePageNumber: 1,
		errorData: '',
	}
}

export function imageRequestSuccess(receivedData) {
	return {
		type: constants.ActionTypes.imageRequestSuccess,
		isFetching: false,
		errorData: '',
		receivedData: JSON.parse(receivedData)
	}
}

export function imageRequestError(receivedData) {
	return {
		type: constants.ActionTypes.imageRequestError,
		isFetching: false,
		errorData: receivedData
	}
}