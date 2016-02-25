import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import Table from './Components/Table.component';
import FakeDatabase from './FakeDatabase';
import ContactFilterInput from './Components/ContactFilterInput.component';
import AddButton from './Components/AddButton.component';
import appStyle from './appStyle.scss';
import componentStyles from './Components/componentStyles.scss';
import Dialog from 'material-ui/lib/dialog';
import FieldInput from './Components/FieldInput.component'

export class App extends Component {
  constructor(props) {
    super(props);
    const tableData = this.convertJsontoArray(FakeDatabase)
    this.state = {
      headers: ['First Name', 'Last Name', 'Date of Birth', 'Phone Number', 'Email', 'Notes'],
      rows: tableData.slice(1),
      openModal: false,
    };
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

  render() {
    const {headers, rows, openModal} = this.state;
    const {flexRow, flexColumn, fieldContainer, leftColumn, rightColumn, notesContainer} = componentStyles;
    console.log('left', leftColumn)
      return (
      <div>
        <Dialog
            modal={false}
            open={openModal}
            onRequestClose={this.modalControl('close')}>

          <div className={fieldContainer}>
           <div className={leftColumn}>
              <FieldInput title={'First Name'}/>
              <FieldInput title={'Date of Birth'}/>
              <FieldInput title={'Email'}/>
            </div>
            <div className={rightColumn}>
              <FieldInput title={'Last Name'}/>
              <FieldInput title={'Phone Number'}/>
            </div>
         </div>

          <div className={'h2'}>
            <FieldInput title={'Notes'}/>
          </div>

          <button onClick={this.modalControl('close')}>
            beep
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