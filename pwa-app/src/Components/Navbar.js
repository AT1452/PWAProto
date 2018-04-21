// Navbar.js

import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a><span className="navbar-toggler-icon"></span></a>
                &nbsp;
                &nbsp;
                &nbsp;
                <a className="navbar-brand" href="https://appdividend.com/">The Bar</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://appdividend.com/">Menu</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}