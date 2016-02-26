import React, { Component } from 'react';
import TableHeader from './TableHeader.component';
import TableRow from './TableRow.component';
import styles from './componentStyles.scss';

function applyFilter(rows, query) {
    const filteredRows = rows.filter((row, index) => {
        return row.some(cell => cell.includes(query))
    })
    return filteredRows
}

export const Table = ({headers, rows, filter}) => {
    const {table} = styles;
    if(filter) rows = applyFilter(rows, filter)
    return (
    <div className={table}>
        <TableHeader headers={headers}/>
        {rows.map((row, index) => <TableRow key={index} row={row}/>)}
    </div>)
}

export default Table