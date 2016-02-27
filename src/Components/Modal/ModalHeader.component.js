import React, { Component } from 'react';
import {modalHeaderContainer, buttonContainer, button} from './modal.scss';
import CloseIcon from './closeIcon.component'
export const ModalHeader = ({close}) => {
    return(<div className={modalHeaderContainer}>
        <div>Contacts Keeper</div>
        <div className={buttonContainer}>
            <button
            onClick={close}
            type="button"
            className={button}>
                <CloseIcon/>
            </button>
        </div>
    </div>)
}

export default ModalHeader;