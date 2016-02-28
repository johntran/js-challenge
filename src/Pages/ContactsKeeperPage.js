import React, { Component } from 'react';
import Table from './../Components/Table/Table.component.js';
//import FakeDatabase from './FakeDatabase';
import ContactFilterInput from './../Components/ContactFilterInput/ContactFilterInput.component.js';
import AddButton from './../Components/Modal/AddButton.component.js';
import { flexRow, flexColumn, fieldContainer, leftColumn, rightColumn, notesContainer } from './../Components/componentStyles.scss';
import Dialog from '../../node_modules/material-ui/lib/dialog';
import FieldInput from './../Components/FieldInput.component.js';
import ModalHeader from './../Components/Modal/ModalHeader.component.js';
import {contactsKeeperPage} from './ContactsKeeperPage.scss';
import ContactsKeeperModal from '../Components/ContactsKeeperModal.component'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as contactTableActions from '../redux/actions';
import Modal from './../Components/Modal/Modal.component'

export class ContactsKeeperPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: ['First Name', 'Last Name', 'Date of Birth', 'Phone Number', 'Email', 'Notes'],
            rows: [],
            openModal: false,
            contactCurrentlyEdited: {},
        };
        console.log('props', props)
    }

    handleFormState(property, event) {
        this.setState({
            contactCurrentlyEdited: Object.assign({},
                this.state.contactCurrentlyEdited,
                {[`${property}`]: event.target.value})
        })
    }

    modalControl(action) {
        const modalActions = {
            open: () => this.setState({openModal: true}),
            close: () => this.setState({openModal: false}),
        }
        return modalActions[action]
    }

    componentDidMount() {
        this.props.actions.fetchContacts().then(bee=> console.log(this.props));
    }

    render() {
        const {headers, openModal} = this.state;
        const {filteredContacts} = this.props.contactsTable
        const {addContact, updateFilterQuery, filterTable} = this.props.actions
        return (
            <div className={contactsKeeperPage}>
                <ContactsKeeperModal
                    isOpen={openModal}
                    close={this.modalControl('close')}
                    handleFormState={this.handleFormState.bind(this)}
                    addContact={()=>addContact(this.state.contactCurrentlyEdited)}
                />

                <div className={flexRow}>
                    <ContactFilterInput
                        updateFilterQuery={updateFilterQuery}
                        filterTable={filterTable}
                    />
                    <AddButton
                        openModal={this.modalControl('open')}
                    />
                </div>
                <Table
                    headers={headers}
                    rows={filteredContacts ? filteredContacts : []}
                    filter={''}
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


//<ContactsKeeperModal
//    open={openModal}
//    onRequestClose={this.modalControl('close')}
//    handleFormState={this.handleFormState.bind(this)}
//    addContact={()=>addContact(this.state.contactCurrentlyEdited)}
///>
//

