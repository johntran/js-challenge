import React, { Component } from 'react';
import {flexRow} from '../../scss/_flex.scss';
import SearchIcon from './searchIcon.component';
import { searchIcon, searchBar } from './ContactFilterInput.scss'

export const ContactFilterInput = ({filterTable, updateFilterQuery}) => {
    return(<div className={flexRow}>
        <input
            className={searchBar}
            onChange={updateFilterQuery}
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