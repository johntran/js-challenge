import React, { Component } from 'react';
import TableHeader from './TableHeader.component';
import TableRow from './TableRow.component';
import styles from './componentStyles.scss';

export const Table = ({headers, rows}) => {
    const {table} = styles;
    return (
    <div className={table}>
        <TableHeader headers={headers}/>
        {rows.map((row, index) => <TableRow key={index} row={row}/>)}
    </div>)
}

export default Table