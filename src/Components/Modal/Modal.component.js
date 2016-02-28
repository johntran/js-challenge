import React from 'react';
import {modal, modalBackground} from './modal.scss'
import ModalHeader from './ModalHeader.component'

export const Modal = ({children, isOpen, close}) => {

    return(
        <div>
        {isOpen ?
                <div className={modalBackground}>
                    <div className={modal}
                    onClick={null}>
                        <ModalHeader
                        close={close}
                        />
                        {children}
                    </div>
                </div>
            :
            null
        }
        </div>
    )
}

export default Modal