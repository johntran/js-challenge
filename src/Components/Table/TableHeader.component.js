import React, { Component } from 'react';
import {tableHeader, tableHeaderCell, headerText, notesHeaderCell} from './TableRow.scss';
import UpArrowIcon from './UpArrowIcon.component'
import DownArrowIcon from './DownArrowIcon.component'

export const TableHeader = ({headers, sortTable, columnSort}) => {
    const {columnIndex, direction} = columnSort;
   return(
    <div className={tableHeader}>
        {headers.map((header,index) => (
            <div className={header === 'Notes' ? notesHeaderCell : tableHeaderCell}
                key={header}
            onClick={()=>sortTable(index)}>
                <span className={headerText}>{header}</span>
                {columnIndex === index ?
                    direction === 'ascending' ?
                    <UpArrowIcon/> : <DownArrowIcon/>
                    : null}
            </div>
        ))}
    </div>)
}

export default TableHeader