import React, { PropTypes } from 'react';

const SearchHistory = ({ searchHistory, onUpdateSearchTerm }) => (
	<ul>
		{
			searchHistory.map(historyItem => 
				<li key={historyItem}>{historyItem}</li>
			)
		}
	</ul>
);

SearchHistory.propTypes = {
	searchHistory: PropTypes.array.isRequired,
	onUpdateSearchTerm: PropTypes.func.isRequired
}

export default SearchHistory;

