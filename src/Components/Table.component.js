import React, { Component } from 'react';
import TableHeader from './TableHeader.component'
import TableRow from './TableRow.component'

export const Table = ({tableData}) => {
    console.log(tableData)
    //const headers = Object.keys(tableData)
    //                      .map(header => header)
    //const rows = tableData.
    return (
    <div>
        <TableHeader/>
        <TableRow/>
    </div>)
}

export default Table