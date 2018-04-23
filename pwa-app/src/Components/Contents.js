// Content.js

import React, { Component } from 'react';

export default class Content extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Welcome back</h5>
                    <p className="card-text">
                        Click below to repeat your recent order, or open up the menu to try something new!
                    </p>
                    <a href="#" className="btn btn-primary">Order now</a>
                </div>
            </div>
        )

    }
}