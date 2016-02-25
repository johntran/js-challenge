import React, { Component } from 'react';
import styles from './componentStyles.scss';

export const FieldInput = ({title}) => {
    const {inputFieldContainer} = styles;
    return(
        <div className={inputFieldContainer}>
            {title}
           <input/>
        </div>
    )
};

export default FieldInput