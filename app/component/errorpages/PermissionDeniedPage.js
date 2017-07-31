'use strict';

/*************************************
 * NotFoundPage Component
 * when any requested resource not found, below component will be rendered
 * showing user friendly message
 * *************************************/

import React, {Component} from 'react';
import { Link } from 'react-router';

// expose NotFoundPage as react component
export default class PermissionDeniedPage extends Component {
    render() {
        return (
            <div className="not-found">
                <h1>403</h1>
                <h2>OOPS ! You are not authorized. Go away!</h2>
            </div>
        );
    }
}