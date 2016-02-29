import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as contactTableActions from '../../redux/actions';

import Table from './../../Components/Table/Table.component.js';
import AddButton from './../../Components/Modal/AddButton.component.js';

import ContactFilterInput from './../../Components/ContactFilterInput/ContactFilterInput.component.js';
import ContactsKeeperModal from './Components/ContactsKeeperModal.component.js'

import { flexRow } from '../../scss/_flex.scss';
import {contactsKeeperPage} from './ContactsKeeperPage.scss';

export class ContactsKeeperPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.fetchContacts();
    }

    render() {
        const {modalIsOpen, filteredContacts, columnSort} = this.props.contactsTable
        const {addContact, updateFilterQuery, updateForm, filterTable, openModal, closeModal, sortTable} = this.props.actions
        return (
            <div className={contactsKeeperPage}>
                <ContactsKeeperModal
                    isOpen={modalIsOpen}
                    close={closeModal}
                    handleFormState={updateForm}
                    addContact={addContact}
                />

                <div className={flexRow}>
                    <ContactFilterInput
                        updateFilterQuery={updateFilterQuery}
                        filterTable={filterTable}
                    />
                    <AddButton
                        openModal={openModal}
                    />
                </div>
                <Table
                    headers={['First Name', 'Last Name', 'Date of Birth', 'Phone', 'Email', 'Notes']}
                    rows={filteredContacts ? filteredContacts : []}
                    sortTable={sortTable}
                    columnSort={columnSort}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contactsTable: state.contactsTable
    }
}

const mapDispatchToProps = (dispatch) => {
    return{ actions: bindActionCreators(contactTableActions, dispatch)}
}

export const ContactsKeeperPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsKeeperPage);

export default ContactsKeeperPageContainer;

