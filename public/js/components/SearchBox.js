import React, { PropTypes } from 'react';

const SearchBox = ({ onUpdateSearchTerm }) =>  {
	let inputElement;
	return (
		<div className="searchBox">
			<input ref={node => { inputElement = node }} type="text" defaultValue="enter a search term..." onClick={ () => inputElement.value = '' }></input>
			<button onClick={ () => {
				onUpdateSearchTerm(inputElement.value);
				inputElement.value = 'enter a search term...';
			}} >
			Search
			</button>
		</div>
	)
}

SearchBox.PropTypes = {
	onUpdateSearchTerm: PropTypes.func.isRequired
}

export default SearchBox;