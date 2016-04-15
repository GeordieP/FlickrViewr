import React, { PropTypes } from 'react';

const SearchBox = ({ onUpdateSearchTerm }) =>  {
	let inputElementDefaultVal = 'try toronto? maybe sunset?';
	let inputElement;
	let submit = () => {
		if (inputElement.value === inputElementDefaultVal) return;
		onUpdateSearchTerm(inputElement.value);
		inputElement.value = '';
	}
	return (
		<div className="searchBox">
			<input 
				ref={node => inputElement = node}
				type="text" 
				defaultValue={inputElementDefaultVal}
				onClick={() => inputElement.value = ''}
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