'use strict';

/*************************************
 * NotFoundPage Component
 * when any requested resource not found, below component will be rendered
 * showing user friendly message
 * *************************************/

import React, {Component} from 'react';
import { Link } from 'react-router';

// expose NotFoundPage as react component
export default class ServerErrorPage extends Component {
    render() {
        return (
            <div className="not-found">
                <h1>500</h1>
                <h2>OOPS ! Something went wrong!</h2>
            </div>
        );
    }
}