import * as constants from './constants';
import { SendGetReq, FlickrPhotoSearchURLBuilder } from './apis'

/*
* set new search term in store and dispatch imageRequestBegin
* to get image results for new search term
* @param {Function} dispatch : store's dispatch function
* @param {String} searchTerm : new search term, likely provided by front end
* @return {Object} : action with updated values
* uses Date.now() as unique ID; not very robust, but works fine for this simple application
*/
export function updateSearchTerm(dispatch, searchTerm) {
	dispatch(imageRequestBegin(dispatch, FlickrPhotoSearchURLBuilder(searchTerm)));

	return {
		type: constants.ActionTypes.updateSearchTerm,
		searchTerm: searchTerm,
		searchID: Date.now()
	}
}

/*
* update sort by method in the store and in the photo search URL builder cache
* and send a new request for images using updated sort by method
* @param {Function} dispatch : store's dispatch function
* @param {String} sortBy : new sort by method, likely provided by front end
* @return {Object} : action with updated values
*/
export function updateSortBy(dispatch, sortBy) {
	let newSortBy = constants.SortByMethods[sortBy];
	dispatch(imageRequestBegin(dispatch, FlickrPhotoSearchURLBuilder(void 0, void 0, newSortBy)));

	return {
		type: constants.ActionTypes.updateSortBy,
		sortBy: newSortBy,
		imagePageNumber: 1
	}
}

/*
* set the active selected single image in the store
* @param {String} imageID : imageID corresponding to selected image in the images array
* @return {Object} : action with updated values
*/
export function selectFullImage(imageID) {
	return {
		type: constants.ActionTypes.selectFullImage,
		imageID: imageID
	}
}

/*
* get the next page of images from flickr using the current search term
* and send a new request for images using the new page number
* passes void to FlickrPhotoSearchURLBuilder to automatically use current cached search term
* @param {Function} dispatch : store's dispatch function
* @param {String} currentPageNumber : page number user was on when they clicked next
* @return {Object} : action with updated values
*/
export function loadNextPage(dispatch, currentPageNumber) {
	let newPageNumber = ++currentPageNumber;
	dispatch(imageRequestBegin(dispatch, FlickrPhotoSearchURLBuilder(void 0, newPageNumber)));

	return {
		type: constants.ActionTypes.loadNextPage,
		imagePageNumber: newPageNumber
	}
}

/*
* get the previous page of images from flickr using the current search term
* passes void to FlickrPhotoSearchURLBuilder to automatically use current cached search term
* @param {Function} dispatch : store's dispatch function
* @param {String} currentPageNumber : page number user was on when they clicked previous
* @return {Object} : action with updated values
*/
export function loadPrevPage(dispatch, currentPageNumber) {

	let newPageNumber = --currentPageNumber;
	dispatch(imageRequestBegin(dispatch, FlickrPhotoSearchURLBuilder(void 0, newPageNumber)));

	return {
		type: constants.ActionTypes.loadPrevPage,
		imagePageNumber: newPageNumber
	}
}

/*
* send a get request to the given URL, handle results in callback functions
* change the store to represent our request-in-progress state and 
* dispatch new actions based on request results once they arrive
* @param {Function} dispatch : store's dispatch function
* @param {String} url : url to send the GET request to. In this application 
* it will always be a flickr url with parameters representing settings in the view
* @return {Object} : action with updated values
*/
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

/*
* GET request successful, so update the store
* @param {Object} receivedData : data received from the flickr API
* @return {Object} : action with updated values
*/
export function imageRequestSuccess(receivedData) {
	return {
		type: constants.ActionTypes.imageRequestSuccess,
		isFetching: false,
		errorData: '',
		receivedData: JSON.parse(receivedData)
	}
}

/*
* GET request failed, so update the store with error data, most
* likely returned from apis.SendGetReq()
* @param {Object} receivedData : error data received
* @return {Object} : action with updated values
*/
export function imageRequestError(receivedData) {
	return {
		type: constants.ActionTypes.imageRequestError,
		isFetching: false,
		errorData: receivedData
	}
}