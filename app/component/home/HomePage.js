import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePage extends Component {
    render() {
    debugger;
        
        return (
            <div>
                <div className="col-md-12">
                    <div className="col-md-12 row text-center"><h2>
                        <p>This is a demo app to showcase universal rendering</p>
                    </h2>
                    </div>
                    <div className="col-md-12 row" >
                        <h5><p>App is built with following technology stacks: </p></h5>
                    </div>
                    <div className="col-md-12 row">
                        <div className="col-md-4">
                            <ul>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>Handlebars</li>
                                <li>ES6</li>
                                <li>ReactJS</li>
                                <li>Redux</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>Bootstrap Material</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>GruntJS</li>
                                <li>Webpack</li>
                                <li>ESHint</li>
                                <li>ES6</li>
                                <li>Babel</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>Sequelize - ORM</li>
                                <li>AWS S3 Bucket</li>
                                <li>AWS Lambda</li>
                                <li>AWS SQS</li>
                                <li>AWS RDS - MariaDB</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12 row" >
                        <h5><p>App is using following crutial NPM packages: </p></h5>
                    </div>
                    <div className="col-md-12 row">
                        <div className="col-md-4">
                            <ul>
                                <li>axios</li>
                                <li>multer</li>
                                <li>nodemon</li>
                            </ul>
                        </div>
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 