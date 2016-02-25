import React, { Component } from 'react';
import styles from './componentStyles.scss';

const TableCell = ({key, cell}) => {
    const {tableCell} = styles;
    return(
       <div key={key}
            className={tableCell}>
           {cell}
       </div>
   )
}

export const TableRow = ({key, row}) => {
    const {tableRow} = styles;
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