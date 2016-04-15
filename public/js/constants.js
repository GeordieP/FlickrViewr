// All the action types to be returned from actions and read in reducers
exports.ActionTypes = {
	updateSearchTerm: "UPDATE_SEARCHTERM",
	updateSortBy: "UPDATE_SORTBY",
	selectFullImage: "SELECT_FULL_IMAGE",
	loadNextPage: "LOAD_NEXT_PAGE",
	loadPrevPage: "LOAD_PREV_PAGE",
	imageRequestBegin: "IMAGE_REQUEST_BEGIN",
	imageRequestSuccess: "IMAGE_REQUEST_SUCCESS",
	imageRequestError: "IMAGE_REQUEST_ERROR",
}

// Image result sort-by methods available on flickr, keyed by a more readable version of each
exports.SortByMethods = {
	'Interestingness (Descending)': 'interestingness-desc',
	'Interestingness (Ascending)': 'interestingness-asc',
	'Date Posted (Descending)': 'date-posted-desc',
	'Date Posted (Ascending)': 'date-posted-asc',
	'Date Taken (Descending)': 'date-taken-desc',
	'Date Taken (Ascending)': 'date-taken-asc',
	'Relevance': 'relevance'
};

exports.DefaultSortByMethod = 'interestingness-desc';

exports.MaxSearchHistoryLength = 10;

// Default state of the store's imgThumbCollection
exports.DefaultImgThumbCollectionState = {
	searchTerm: '',
	searchHistory: [],	
	sortBy: 'date-posted-desc',
	imagePageNumber: 1,
	images: [],
	reactJS: {
		isFetching: false,
		errorData: ''
	}
}

// Default state of the store's imgFullDisplay
exports.DefaultImgFullDisplayState = {
	selectedImage: 'no selected img',
	reactJS: {
		isFetching: false,
		errorData: ''
	}
}