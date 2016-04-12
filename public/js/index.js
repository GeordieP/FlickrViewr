import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppMain from './components/AppMain';
import FlickrViewr from './reducers'

let store = createStore(FlickrViewr);

render (
	<Provider store={store}>
		<AppMain />
	</Provider>,
	document.getElementById('root')
);