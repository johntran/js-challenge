import React, { Component } from 'react';
import styles from './../componentStyles.scss';
import AddIcon from './AddIcon.component'

export const AddButton = ({openModal}) => {
    const {addButtonContainer, addButtonText, addButton} = styles;
    return(<div className={addButtonContainer}>
        <button
            onClick={openModal}
            type="button"
            className={addButton}
        >
            <AddIcon/>
            <span className={addButtonText}>Contacts Keeper</span>
        </button>
        </div>
    )
}

export default AddButton