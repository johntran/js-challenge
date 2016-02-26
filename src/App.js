import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RouteHandler } from 'react-router';

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={'hi'}>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object,
    location: PropTypes.object
};

App.contextTypes = {
    location: React.PropTypes.object,
    history: React.PropTypes.object
};