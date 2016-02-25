import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import Table from './Components/Table.component';
import FakeDatabase from './FakeDatabase';
import appStyle from './appStyle.scss'


export class App extends Component {
  constructor(props) {
    super(props);
    const tableData = this.convertJsontoArray(FakeDatabase)
    this.state = {
      headers: ['First Name', 'Last Name', 'Date of Birth', 'Phone Number', 'Email', 'Notes'],
      rows: tableData.slice(1)
    };
  }

  convertJsontoArray(tableData) {
    const headers = ['firstName', 'lastName', 'dob', 'phone', 'email', 'notes']
    const rows = tableData.map(user => headers.map(header => user[header]))
    return [headers, ...rows]
  }

  render() {
    const {headers, rows} = this.state;
    const {procoreTable} = appStyle;
    return (
      <div>
        <Table
          headers={headers}
          rows={rows}
        />
      </div>
    );
  }
}