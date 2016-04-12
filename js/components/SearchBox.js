import React, { PropTypes } from 'react';

const SearchBox = ({ onUpdateSearchTerm }) =>  {
	let inputElement;
	return (
		<div>
			<input ref={node => { inputElement = node }} type="text"></input>
			<button onClick={ () => {
				onUpdateSearchTerm(inputElement.value);
				inputElement.value = '';
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