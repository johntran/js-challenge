import React from 'react';
import {headerArrows} from './TableHeader.scss';

export const UpArrowIcon = (props) => (
    <div className={headerArrows}>
        <svg fill="#FFF" height="12" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    </div>
)

export default UpArrowIcon;