import React from 'react';
import Dialog from '../../node_modules/material-ui/lib/dialog';
import ModalHeader from './Modal/ModalHeader.component.js';
import {fieldContainer, leftColumn, rightColumn } from './componentStyles.scss';
import FieldInput from './FieldInput.component';

//const handleFormState = () => console.log('hi')
export const ContactsKeeperModal = ({open, onRequestClose, handleFormState, addContact}) => (
    <Dialog
        modal={false}
        open={open}
        onRequestClose={onRequestClose}>
        <ModalHeader close={onRequestClose} />
        <div className={fieldContainer}>
            <div className={leftColumn}>
                <FieldInput title={'First Name'}
                            onChange={event => handleFormState('firstName', event)}/>
                <FieldInput title={'Date of Birth'}
                            onChange={event => handleFormState('dob', event)}/>
                <FieldInput title={'Email'}
                            onChange={event => handleFormState('email', event)}/>
            </div>
            <div className={rightColumn}>
                <FieldInput title={'Last Name'}
                            onChange={event => handleFormState('lastName', event)}/>
                <FieldInput title={'Phone Number'}
                            onChange={event => handleFormState('phone', event)}/>
            </div>
        </div>

        <div className={'h2'}>
            <FieldInput title={'Notes'}
                        multiline={true}
                        onChange={event => handleFormState('notes', event)}/>
        </div>

        <button onClick={addContact}>
            Save
        </button>
    </Dialog>
)

export default ContactsKeeperModal;