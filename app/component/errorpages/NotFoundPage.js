'use strict';

/*************************************
 * NotFoundPage Component
 * when any requested resource not found, below component will be rendered
 * showing user friendly message
 * *************************************/

import React, {Component} from 'react';
import { Link } from 'react-router';

// expose NotFoundPage as react component
export default class NotFoundPage extends Component {
    render() {
        return (
            <div className="not-found">
                <h1>404</h1>
                <h2>OOPS ! Resource not found!</h2>
            </div>
        );
    }
}