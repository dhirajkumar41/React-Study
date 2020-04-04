import React, { Component } from 'react';
import './UserOutput.css'

class UserOutput extends Component {

    render() {
        return (
            <div className="UserOutput">
                <div className="paragraph">
                    {this.props.name}
                    - UserInput should hold an input element, UserOutput two paragraphs
                    3.Output multiple UserOutput components in the App component
                </div>
            </div>
        );
    }
}

export default UserOutput;