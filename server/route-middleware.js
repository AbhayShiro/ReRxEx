'use strict';

/**************************************
 * server/router-middleware.js
 * matches requested route with react router
 * renders respective component on server and deliver markup to template
 * note: this is only for first time when req is received
 ***************************************/

import React                    from 'react';
import ReactDOM                 from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes                   from './../app/routes';
import configureStore           from './../app/redux/store';
import { Provider }             from 'react-redux'

// universal routing and rendering
module.exports = (req, res) => {

    let store = configureStore();

    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {

        // in case of error display the error message
        if (err) {
            return res.status(500).send(err.message);
        }

        // in case of redirect propagate the redirect to the browser
        if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        let reduxState = {}
        const store = configureStore(reduxState)

        // generate the React markup for the current route
        let markup;
        if (renderProps) {

            // if the current route matched we have renderProps
            markup = ReactDOM.renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps}/>
                </Provider>);

        } else {
            // otherwise we can render a 404 page
            markup = ReactDOM.renderToString(<NotFoundPage/>);
            res.status(404);
        }

        // push html and state to template        
        return res.render('index', { markup, reduxState });
    });
}