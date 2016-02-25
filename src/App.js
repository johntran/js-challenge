import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import Table from './Components/Table.component';
import FakeDatabase from './FakeDatabase';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    //this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: FakeDatabase,
    };
  }

  convertJsontoArray(tableData) {
    const headers = ['firstName', 'lastName', 'dob', 'phone', 'email', 'notes']
    const rows = tableData.map(user => headers.map(header => user[header]))
    return [headers, ...rows]
  }

  render() {
    const {tableData} = this.state
    this.convertJsontoArray(tableData)
    return (
      <div>
        <Table
          tableData={tableData}
        />
      </div>
    );
  }
}