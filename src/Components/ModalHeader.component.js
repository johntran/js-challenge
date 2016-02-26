import React, { Component } from 'react';
import styles from './componentStyles.scss';
export const ModalHeader = ({close}) => {
    const {flexRow} = styles;
    return(<div className={flexRow}>
        <button
            onClick={close}
            type="button"></button>
    </div>)
}

export default ModalHeader;