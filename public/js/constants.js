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

exports.SortByMethods = [
	'date-posted-desc',
	'date-posted-asc',
	'date-taken-asc',
	'date-taken-desc',
	'interestingness-desc',
	'interestingness-asc',
	'relevance'
];

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