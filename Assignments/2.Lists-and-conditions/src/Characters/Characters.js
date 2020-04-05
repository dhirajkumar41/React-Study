import React, { Component } from 'react';

class Characters extends Component {
    render () {

        const style = {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black'
        };

        return (
            <p style={style} onClick={this.props.deleteChars}>{this.props.character} </p>
        )
    }
}

export default Characters;