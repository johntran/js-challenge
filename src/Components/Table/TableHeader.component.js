import React, { Component } from 'react';
import {tableHeader, tableCellHeader, headerText, notesHeaderCell} from './../componentStyles.scss';

export const TableHeader = ({headers, sortTable}) => {
   return(
    <div className={tableHeader}>
        {headers.map((header,index) => (
            <div className={header === 'Notes' ? notesHeaderCell : tableCellHeader}
                key={header}
            onClick={()=>sortTable(index)}>
                <span className={headerText}>{header}</span>
            </div>
        ))}
    </div>)
}

export default TableHeader