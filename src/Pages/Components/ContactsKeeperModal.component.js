import React from 'react';
import FieldInput from './../../Components/FieldInput/FieldInput.component.js';
import Modal from './../../Components/Modal/Modal.component.js'
import {fieldContainer, leftColumn, rightColumn, modalContainer, separation, saveButton, saveButtonContainer} from './ContactsKeeperModal.scss';
export const ContactsKeeperModal = ({isOpen, close, handleFormState, addContact}) => (
    <Modal
        close={close}
        isOpen={isOpen}>
        <div className={modalContainer}>
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
        </div>

        <hr className={separation}/>
        <div className={saveButtonContainer}>
        <button className={saveButton}
            onClick={addContact}>
            Save
        </button>
            </div>
    </Modal>
)

export default ContactsKeeperModal;