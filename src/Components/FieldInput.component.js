import React, { Component } from 'react';
import {inputFieldContainer, multilineInputFieldContainer, multilineInput, inputField} from './componentStyles.scss';

export const FieldInput = ({title, multiline, onChange}) => {
    if (multiline) return (
    <div className={multilineInputFieldContainer}>
        {title}
            <textarea className={multilineInput}
                      onChange={onChange}
                      rows="3"
            />
    </div>
    )

    return(
        <div className={inputFieldContainer}>
            {title}
            <input
                className={inputField}
                onChange={onChange}/>
        </div>
    )
}

export default FieldInput

