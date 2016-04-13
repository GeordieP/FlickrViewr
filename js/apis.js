exports.SendGetReq = (url, successCallback, errorCallback) => {
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

exports.FlickrPhotoSearchURLBuilder = (searchTerm, resultsPage) => {
	let args = [
		'https://api.flickr.com/services/rest/?method=flickr.photos.search',
		'api_key=bd70a9f9a4f40db9a8f10e90fb31f049',		// not too concerned with giving away my API key here honestly, its usage isn't super important
		'text=' + searchTerm,
		'format=json',
		'nojsoncallback=1',
		'per_page=10',
		'page=' + resultsPage,
		'extras=url_s,url_z,url_o'
	];
	
	let theurl = args.reduce( (prev, curr) => prev + '&' + curr );
	console.log('req url: ' + theurl);
	return theurl;
}