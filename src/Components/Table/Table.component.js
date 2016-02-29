import React, { Component } from 'react';
import TableHeader from './TableHeader.component.js';
import TableRow from './TableRow.component.js';
import {table} from './Table.scss';

export const Table = ({headers, rows, sortTable, columnSort}) => (
    <div className={table}>
        <TableHeader
            headers={headers}
            sortTable={sortTable}
            columnSort={columnSort}
        />
        {rows.map((row, index) => <TableRow key={index} row={row}/>)}
    </div>
)

export default Table