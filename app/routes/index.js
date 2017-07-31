'use strict';

/*************************************
 * index.js
 * consist all routes and entry route for react app  
 * *************************************/

// load react dependacies
import React            from 'react';
import {Route}          from 'react-router';

// load containers
import Layout           from './../component/app';
import HomePage from './../component/home/HomePage';
import NotFoundPage from './../component/errorpages/NotFoundPage';

// define app routes
const routes = (
    <Route component={Layout}>
        <Route path="/" component={HomePage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;