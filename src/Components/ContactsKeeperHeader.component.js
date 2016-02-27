import React, { Component } from 'react';
import {contactsKeeperHeaderContainer, greyBox, orangeBox} from './componentStyles.scss';
//import CloseIcon from './closeIcon.component'
export const ContactsKeeperHeader = ({close}) => {
    return(
        <div className={contactsKeeperHeaderContainer}>
            <div className={orangeBox}>Contacts Keeper</div>
            <div className={greyBox}></div>
        </div>
    )
}

export default ContactsKeeperHeader;