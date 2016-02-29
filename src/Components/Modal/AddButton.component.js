import React, { Component } from 'react';
import {addButtonContainer, addButtonText, addButton}from './AddButton.scss';
import AddIcon from './AddIcon.component'

export const AddButton = ({openModal}) => {
    return(<div className={addButtonContainer}>
        <button
            id="AddButton"
            onClick={openModal}
            type="button"
            className={addButton}>
            <AddIcon/>
            <span className={addButtonText}>Contacts Keeper</span>
        </button>
        </div>
    )
}

export default AddButton