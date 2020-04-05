import React, { Component } from 'react';
import './Validation.css';

class Validation extends Component {
    render () {
        let textLength = this.props.textLength;
        let text = '';

        if (textLength<5) {
          text = 'Text is too short';
        }

        if (textLength>25) {
          text = 'Text is too long';
        }

        return (
            <p>{ text }</p>
        )
    }
}

export default Validation;