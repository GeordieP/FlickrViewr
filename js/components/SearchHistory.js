import React, { PropTypes } from 'react';

const SearchHistory = ({ searchHistory, onUpdateSearchTerm }) => (
	<ul className="searchHistory">
		{
			searchHistory.map(historyItem => 
				<li key={historyItem.searchID} href="#"onClick={ (e) => {
					e.preventDefault();
					onUpdateSearchTerm(historyItem.searchTerm);
				}}>
					{historyItem.searchTerm}
				</li>
			)
		}
	</ul>
);

SearchHistory.propTypes = {
	searchHistory: PropTypes.array.isRequired,
	onUpdateSearchTerm: PropTypes.func.isRequired
}

export default SearchHistory;

