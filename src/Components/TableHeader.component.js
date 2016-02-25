import React, { Component } from 'react';
import styles from './componentStyles.scss';

export const TableHeader = ({headers}) => {
const {tableHeader, tableCell} = styles;
   return(
    <div className={tableHeader}>
        {headers.map(header => (
            <div className={tableCell}
                key={header}>
                {header}
            </div>
        ))}
    </div>)
}

export default TableHeader