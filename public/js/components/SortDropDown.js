import React from 'react';
import * as constants from '../constants';

export default ({ onUpdateSortMethod }) => {
	let selectElement;
	return (
		<select ref={node => { selectElement = node }} onChange={ () => onUpdateSortMethod(selectElement.value) }>
			{
				// Object.keys(constants.SortByMethods).map(sortMethod =>
				constants.SortByMethods.map(sortMethod =>
					<option key={sortMethod} value={sortMethod}>{sortMethod}</option>
				)
			}
		</select>
	)
}
