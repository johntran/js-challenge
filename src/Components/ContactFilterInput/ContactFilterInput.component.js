import React, { Component } from 'react';
import styles from './../componentStyles.scss';
import SearchIcon from './searchIcon.component';
import { searchIcon } from './ContactFilterInput.scss'

export const ContactFilterInput = ({updateFilter}) => {
    const {flexRow} = styles;
    return(<div className={flexRow}>
        <input placeholder="Search"/>
        <button type="button"
                className={searchIcon}
                onClick={updateFilter}
        >
            <SearchIcon/>
        </button>
    </div>)
}

export default ContactFilterInput;