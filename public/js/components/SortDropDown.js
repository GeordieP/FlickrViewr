import React from 'react';
import * as constants from '../constants';

export default ({ onUpdateSortMethod }) => {
	let selectElement;
	return (
		<div className="selectElement">
			<h2>Sort By</h2>
			<select ref={node => { selectElement = node }} onChange={ () => onUpdateSortMethod(selectElement.value) }>
				{
					Object.keys(constants.SortByMethods).map((sortMethod, index, methodsArray) =>
						<option key={sortMethod} value={sortMethod}>{methodsArray[index]}</option>
					)
				}
			</select>
		</div>
	)
}
