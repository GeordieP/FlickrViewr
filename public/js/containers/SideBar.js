import React from 'react';
import SearchBox from '../components/SearchBox';
import SearchHistory from '../components/SearchHistory';

export default React.createClass({
	render() {
		return (
			<aside>
				<SearchBox />
				<SearchHistory />
			</aside>
		)
	}
});