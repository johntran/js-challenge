import React, { Component } from 'react';
import {tableCellRow, rowText, tableRow, notesRowCell} from './TableRow.scss';

const TableCell = ({key, cell, index}) => {
    return(
       <div key={key}
            className={index === 5 ? notesRowCell : tableCellRow}>
           <span className={rowText}>{cell}</span>
       </div>
   )
}

export const TableRow = ({key, row}) => {
    return(
        <div key={key}
             className={tableRow}>
            {row.map((cell, index) =>
                <TableCell key={index} index={index} cell={cell}/>
            )}
        </div>
    )
}

export default TableRow