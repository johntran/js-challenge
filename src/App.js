import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RouteHandler } from 'react-router';
import {ContactsKeeperHeader} from './Components/ContactsKeeperHeader.component'

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={'hi'}>
                <ContactsKeeperHeader/>
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

//export const initialState = {
//    contactsTable: {
//        allContacts: [],
//        filteredContacts: [],
//        isFetching: false,
//        didInvalidate: false,
//        filter: '',
//        filterQuery: '',
//        modalIsOpen: false,
//        contactCurrentlyEdited: {},
//        columnSort: {
//            columnIndex: null,
//            direction: null,
//        }
//    },
//};