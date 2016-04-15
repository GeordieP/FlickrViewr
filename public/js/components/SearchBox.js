import React, { PropTypes } from 'react';

const SearchBox = ({ onUpdateSearchTerm }) =>  {
	let inputElement;
	let submit = () => {
		onUpdateSearchTerm(inputElement.value);
		inputElement.value = 'enter a search term...';
	}
	return (
		<div className="searchBox">
			<input 
				ref={node => inputElement = node}
				type="text" 
				defaultValue="enter a search term..."
				onClick={() => inputElement.value = '' }
				onKeyPress={(e) => { if (e.charCode === 13) submit() }}>
			</input>
			<button onClick={() => submit() } >
			Search
			</button>
		</div>
	)
}

SearchBox.PropTypes = {
	onUpdateSearchTerm: PropTypes.func.isRequired
}

export default SearchBox;