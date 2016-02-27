import React, { Component } from 'react';
import {tableCellRow, rowText, tableRow} from './../componentStyles.scss';

const TableCell = ({key, cell}) => {
    return(
       <div key={key}
            className={tableCellRow}>
           <span className={rowText}>{cell}</span>
       </div>
   )
}

export const TableRow = ({key, row}) => {
    return(
        <div key={key}
             className={tableRow}>
            {row.map((cell, index) =>
                <TableCell key={index} cell={cell}/>
            )}
        </div>
    )
}

export default TableRow