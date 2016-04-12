import React, { PropTypes } from 'react';

const SearchHistory = ({ searchHistory, onUpdateSearchTerm }) => (
	<ul>
		{
			searchHistory.map(historyItem => 
				<a key={historyItem.searchID} href="#"onClick={ (e) => {
					e.preventDefault();
					onUpdateSearchTerm(historyItem.searchTerm);
				}}>
					<li>{historyItem.searchTerm}</li>
				</a>
			)
		}
	</ul>
);

SearchHistory.propTypes = {
	searchHistory: PropTypes.array.isRequired,
	onUpdateSearchTerm: PropTypes.func.isRequired
}

export default SearchHistory;

