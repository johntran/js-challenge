import React, { Component } from 'react';
import {inputFieldContainer, multilineInputFieldContainer, multilineInput} from './componentStyles.scss';

export default class FieldInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: 3,
        }
    }

    _handleInputChange() {
        if(this.props.onChange) this.props.onChange(event)
    }
    render() {
        const {title, multiline, onChange} = this.props
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
                <input onChange={onChange}/>
            </div>
        )
    }
}

export default FieldInput