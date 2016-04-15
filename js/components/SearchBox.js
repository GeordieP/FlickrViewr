import React, { PropTypes } from 'react';

const SearchBox = ({ onUpdateSearchTerm }) =>  {
	let inputElement;
	let submit = () => {
		onUpdateSearchTerm(inputElement.value);
		inputElement.value = '';
	}
	return (
		<div className="searchBox">
			<input 
				ref={node => inputElement = node}
				type="text" 
				defaultValue="try toronto? maybe sunset?"
				onClick={() => inputElement.value = ''}
				onBlur={() => inputElement.value = 'enter a search term'}
				onKeyPress={(e) => { if (e.charCode === 13) submit() }}
			>
			</input>
			<button onClick={() => submit()} >
			Search
			</button>
		</div>
	)
}

SearchBox.PropTypes = {
	onUpdateSearchTerm: PropTypes.func.isRequired
}

export default SearchBox;