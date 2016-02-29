import React from 'react';
import FieldInput from './../../../Components/FieldInput/FieldInput.component.js';
import Modal from './../../../Components/Modal/Modal.component.js'
import {fieldContainer, leftColumn, rightColumn, modalContainer, separation, saveButton, saveButtonContainer} from './ContactsKeeperModal.scss';

const leftColumnFields = [['First Name', 'firstName'], ['Date of Birth', 'dob'], ['Email', 'email']];
const rightColumnFields = [['Last Name', 'lastName'], ['Phone', 'phone']];

export const ContactsKeeperModal = ({isOpen, close, handleFormState, addContact}) => (
    <Modal
        close={close}
        isOpen={isOpen}>
        <div className={modalContainer}>
        <div className={fieldContainer}>
            <div className={leftColumn}>
                {leftColumnFields.map(field =>
                    <FieldInput
                        key={field[0]}
                        title={field[0]}
                        onChange={event => handleFormState(field[1], event.target.value)}/>)
                }
            </div>
            <div className={rightColumn}>
                {rightColumnFields.map(field =>
                    <FieldInput
                        key={field[0]}
                        title={field[0]}
                        onChange={event => handleFormState(field[1], event.target.value)}/>)
                }
            </div>
        </div>

        <div>
            <FieldInput title={'Notes'}
                        multiline={true}
                        onChange={event => handleFormState('notes', event.target.value)}/>
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