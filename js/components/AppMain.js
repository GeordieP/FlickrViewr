import React from 'react'
import { render } from 'react-dom'
import SideBar from '../containers/SideBar';
import ViewArea from '../containers/ViewArea';

export default React.createClass({
	render() {
		return (
			<div>
				<SideBar />
				<ViewArea />		
			</div>			
		)
	}
});