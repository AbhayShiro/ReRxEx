'use strict';

/*************************************
 * RedirectPage Component
 * when any requested resource not found, below component will be rendered
 * showing user friendly message
 * *************************************/

import React, {Component} from 'react';
import { Link } from 'react-router';

// expose NotFoundPage as react component
export default class RedirectPage extends Component {
    render() {
        return (
            <div className="not-found">
                <h1>301</h1>
                <h2>OOPS ! You are being redirected!</h2>
            </div>
        );
    }
}