import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">PL Admin</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><IndexLink to="/" activeclassNameName="active">Home</IndexLink></li>
                        <li><Link to="/courses" activeclassNameName="active">Course</Link></li>
                        <li><Link to="/about" activeclassNameName="active">About</Link></li>

                    </ul>
                    <form className="navbar-form navbar-left">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>

            </div>

        </nav>

    );
};



export default Header;