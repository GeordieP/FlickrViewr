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

exports.SortByMethods = {
	'Date Posted (Descending)': 'date-posted-desc',
	'Date Posted (Ascending)': 'date-posted-asc',
	'Date Taken (Ascending)': 'date-taken-asc',
	'Date Taken (Descending)': 'date-taken-desc',
	'Interestingness (Descending)': 'interestingness-desc',
	'Interestingness (Ascending)': 'interestingness-asc',
	'Relevance': 'relevance'
};

exports.DefaultImgThumbCollectionState = {
	searchTerm: 'no search term',
	searchHistory: [{
			searchTerm: 'no search history',
			searchID: 1460485534831
		}
	],
	sortBy: 'date-posted-desc',
	imagePageNumber: 1,
	images: [],
	reactJS: {
		isFetching: false,
		errorData: ''
	}
}

exports.DefaultImgFullDisplayState = {
	selectedImage: 'no selected img',
	reactJS: {
		isFetching: false,
		errorData: ''
	}
}