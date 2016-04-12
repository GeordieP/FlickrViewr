import React, { PropTypes } from 'react';

const SearchHistory = ({ searchHistory, onUpdateSearchTerm }) => (
	<ul>
		{
			searchHistory.map(historyItem => 
				<a key={historyItem} href="#"onClick={ (e) => {
					e.preventDefault();
					onUpdateSearchTerm(historyItem);
				}}>
					<li>{historyItem}</li>
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

