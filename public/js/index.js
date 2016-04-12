import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppMain from './components/AppMain';

render (<AppMain />, document.getElementById('root'));