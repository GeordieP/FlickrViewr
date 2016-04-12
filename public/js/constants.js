exports.ActionTypes = {
	updateSearchTerm: "UPDATE_SEARCHTERM",
	updateSortBy: "UPDATE_SORTBY",
	selectFullImage: "SELECT_FULL_IMAGE",
	imageRequestBegin: "IMAGE_REQUEST_BEGIN",
	imageRequestSuccess: "IMAGE_REQUEST_SUCCESS",
	imageRequestError: "IMAGE_REQUEST_ERROR",
}

exports.SortByMethods = {
	'dateAsc': 'dateAsc',
	'dateDec': 'dateDec'
}

exports.DefaultImgThumbCollectionState = {
	searchTerm: 'no search term',
	searchHistory: [],
	sortBy: 'dateDec',
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
