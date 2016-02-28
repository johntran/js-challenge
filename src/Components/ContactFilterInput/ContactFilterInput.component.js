import React, { Component } from 'react';
import styles from './../componentStyles.scss';
import SearchIcon from './searchIcon.component';
import { searchIcon, searchBar } from './ContactFilterInput.scss'

export const ContactFilterInput = ({filterTable, updateFilterQuery}) => {
    const {flexRow} = styles;
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