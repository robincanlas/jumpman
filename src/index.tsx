import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configureStore } from './app/stores';
import { Provider } from 'react-redux';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './default.css';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);