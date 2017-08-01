import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <h5 className="title">Footer Content</h5>
                        <p>Here you can write random stuff about life and other things that are not related to web development. PS just kidding.</p>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <h5 className="title">Links</h5>
                        <ul className="styleList">
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">About</a></li>
                            <li><a href="#!">Contact Us</a></li>
                            <li><a href="#!">Feedback</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container-fluid">
                    © 2015 Copyright: <a href="/"> Abhay Shiro </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;