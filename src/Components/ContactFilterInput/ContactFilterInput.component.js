import React, { Component } from 'react';
import {flexRow} from '../../scss/_flex.scss';
import SearchIcon from './searchIcon.component';
import { searchIcon, searchBar } from './ContactFilterInput.scss'

export const ContactFilterInput = ({filterTable, updateFilterQuery}) => {
    const ENTER = 13;
    function handleKeyPress (e) {
        if(e.charCode === ENTER) return filterTable()
    }
    return(<div className={flexRow}>
        <input
            className={searchBar}
            onKeyPress={(e)=>handleKeyPress(e)}
            onChange={(event)=>updateFilterQuery(event.target.value)}
            placeholder="Search"/>
        <button type="button"
                className={searchIcon}
                onClick={filterTable}
        >
            <SearchIcon/>
        </button>
    </div>)
}

export default ContactFilterInput;