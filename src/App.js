import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RouteHandler } from 'react-router';
import ContactsKeeperHeader from './Pages/ContactsKeeperPage/Components/ContactsKeeperHeader.component.js'
import ContactsKeeperFooter from './Pages/ContactsKeeperPage/Components/ContactsKeeperFooter.component.js'
import {fullHeight, appContainer} from './App.scss'
export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={fullHeight}>
                <ContactsKeeperHeader/>
                <div>{this.props.children}</div>
                <ContactsKeeperFooter/>
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
