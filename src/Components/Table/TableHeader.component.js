import React, { Component } from 'react';
import {tableHeader, tableCellHeader, headerText, notesHeaderCell} from './../componentStyles.scss';

export const TableHeader = ({headers}) => {
   return(
    <div className={tableHeader}>
        {headers.map(header => (
            <div className={header === 'Notes' ? notesHeaderCell : tableCellHeader}
                key={header}>
                <span className={headerText}>{header}</span>
            </div>
        ))}
    </div>)
}

export default TableHeader