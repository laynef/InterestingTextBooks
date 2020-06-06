import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from '../../../redux/store';
import Application from './component';

import '../../../../scss/pages/errors/403/403';

const render = (Component, create) => {
	const dest = document.getElementById('app');
	const store = create(window.STORAGE || {});

	const application = (
        <Provider store={store} key={Math.random()}>
            <Component />
        </Provider>
	);

	ReactDOM.render(application, dest);
};

render(Application, createStore);

/* eslint-disable */
if (module.hot) {
	module.hot.accept([
		'./component',
		'../../../redux/store',
		'../../../../scss/pages/errors/403/403',
	], () => {
		const newCreateStore = require('../../../redux/store');
		const NewComponent = require('./component');
		render(NewComponent, newCreateStore);
	});
}
