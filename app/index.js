import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

// require('./routes/resource-loader');
import '../public/styles/style.css';
import '../public/libs/bootstrap/dist/css/bootstrap.min.css';
import '../public/libs/bootstrap/dist/css/bootstrap-theme.min.css';

const store = configureStore();


render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app')
);

