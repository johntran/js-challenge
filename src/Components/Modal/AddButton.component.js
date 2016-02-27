import React, { Component } from 'react';
import styles from './../componentStyles.scss';

export const AddButton = ({openModal}) => {
    const {addButtonContainer} = styles;
    return(<div className={addButtonContainer}>
        <button
            onClick={openModal}
            type="button">
            Contacts Keeper
        </button>
        </div>
    )
}

export default AddButton