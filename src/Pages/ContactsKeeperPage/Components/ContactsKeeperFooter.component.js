import React, { Component } from 'react';
import {footer, footerContainer} from './ContactsKeeperFooter.scss';

export const ContactsKeeperFooter = () => {
    return(
        <div className={footerContainer}>
            <hr className={footer}/>
        </div>
    )
}

export default ContactsKeeperFooter;