// Navbar.js

import React, { Component } from 'react';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <span className = "navbar-toggler-icon" onClick={this.props.menuButtonClick} />
                    &nbsp;
                    &nbsp;
                    <a className="navbar-brand" href="https://appdividend.com/">The Bar</a>

            </nav>
        );
    }
}