exports.SendGetReq = (url, successCallback, errorCallback) => {
	if (!url) return;

	let req = new XMLHttpRequest();
	req.open('GET', url, true);
	req.onload = () => {
		if (req.status >= 200 && req.status < 400)
			successCallback(req.responseText);
		else
			errorCallback('error ' + req.status + ' returned from ' + url);
	}
	req.onerror = () => {
		errorCallback('error sending request to ' + url);
	}
	req.send();
}

// Cache the passed arguments so that components dispatching actions to update the request URL only need to specify the information they're changing
// eg. we dont want the SortByMethod dropdown to have to know about the current search term and pass it with its dispatch call, so just use the last cached value
// To use the cached version of an argument, pass void 0
// or omit the argument if its the last one being passed
// -- would like some way to map the arguments in the function to an argCache object automatically using their arg name as a key and default value/passed value as their cached value
// -- not sure if there's a way to do this, need to look into js args more (specifically es6)
let argCache = {
	searchTerm: '',
	resultsPage: '1',
	sortByMethod: 'date-posted-desc'
}
exports.FlickrPhotoSearchURLBuilder = (searchTerm = argCache.searchTerm, resultsPage = argCache.resultsPage, sortByMethod = argCache.sortByMethod) => {
	if (searchTerm === '') return;

	let args = [
		'https://api.flickr.com/services/rest/?method=flickr.photos.search',
		'api_key=bd70a9f9a4f40db9a8f10e90fb31f049',		// not too concerned with giving away my API key here honestly, its usage isn't super important
		'text=' + searchTerm,
		'sort=' + sortByMethod,
		'format=json',
		'nojsoncallback=1',
		'per_page=10',
		'page=' + resultsPage,
		'extras=url_s,url_z,url_o'
	];

	argCache.searchTerm = searchTerm;
	argCache.resultsPage = resultsPage;
	argCache.sortByMethod = sortByMethod;

	return args.reduce( (prev, curr) => prev + '&' + curr );;
}