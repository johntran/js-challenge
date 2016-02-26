import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import Table from './Components/Table.component';
import FakeDatabase from './FakeDatabase';
import ContactFilterInput from './Components/ContactFilterInput.component';
import AddButton from './Components/AddButton.component';
import appStyle from './appStyle.scss';
import { flexRow, flexColumn, fieldContainer, leftColumn, rightColumn, notesContainer } from './Components/componentStyles.scss';
import Dialog from 'material-ui/lib/dialog';
import FieldInput from './Components/FieldInput.component';
import ModalHeader from './Components/ModalHeader.component.js';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as contactTableActions from './redux/actions';

export class App extends Component {
    constructor(props) {
        super(props);
        const tableData = this.convertJsontoArray(FakeDatabase)
        this.state = {
            headers: ['First Name', 'Last Name', 'Date of Birth', 'Phone Number', 'Email', 'Notes'],
            rows: tableData.slice(1),
            openModal: false,
            contactCurrentlyEdited: {},
        };
        console.log('props', props)
    }

    handleFormState(property, event) {
        console.log(this.state)
        event.preventDefault()
        this.setState({
            contactCurrentlyEdited: Object.assign({},
                                    this.state.contactCurrentlyEdited,
                                    {[`${property}`]: event.target.value})
        })
    }

    convertJsontoArray(tableData) {
        const headers = ['firstName', 'lastName', 'dob', 'phone', 'email', 'notes']
        const rows = tableData.map(user => headers.map(header => user[header]))
        return [headers, ...rows]
    }

  modalControl(action) {
    const modalActions = {
      open: () => this.setState({openModal: true}),
      close: () => this.setState({openModal: false}),
    }
    return modalActions[action]
  }

    componentDidMount() {
        this.props.actions.fetchContacts();
    }

  render() {
    const {headers, rows, openModal} = this.state;
    //const {flexRow, flexColumn, fieldContainer, leftColumn, rightColumn, notesContainer} = componentStyles;
      return (
      <div>
        <Dialog
            modal={false}
            open={openModal}
            onRequestClose={this.modalControl('close')}>
            <ModalHeader close={this.modalControl('close')} />
          <div className={fieldContainer}>
           <div className={leftColumn}>
              <FieldInput title={'First Name'}
              onChange={event => this.handleFormState('firstName', event)}/>
              <FieldInput title={'Date of Birth'}
                          onChange={event => this.handleFormState('dob', event)}/>
              <FieldInput title={'Email'}
                          onChange={event => this.handleFormState('email', event)}/>
            </div>
            <div className={rightColumn}>
              <FieldInput title={'Last Name'}
                          onChange={event => this.handleFormState('lastName', event)}/>
              <FieldInput title={'Phone Number'}
                          onChange={event => this.handleFormState('phone', event)}/>
            </div>
         </div>

          <div className={'h2'}>
            <FieldInput title={'Notes'}
                        multiline={true}
                        onChange={event => this.handleFormState('notes', event)}/>
          </div>

          <button onClick={() =>this.props.actions.addContact(this.state.contactCurrentlyEdited)}>
            Save
          </button>
        </Dialog>
        <div className={flexRow}>
          <ContactFilterInput/>
          <AddButton
            openModal={this.modalControl('open')}
          />
        </div>
        <Table
          headers={headers}
          rows={rows}
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

export const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer