import React, { Component } from 'react';
import styles from './componentStyles.scss';
export const ContactFilterInput = (props) => {
    const {flexRow} = styles;
    return(<div className={flexRow}>
        <input/>
        <button type="button"></button>
    </div>)
}

export default ContactFilterInput;