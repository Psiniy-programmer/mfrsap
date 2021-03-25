import React, { Component } from 'react';
import './RaspItem.modules.css';

class RaspItem extends Component {
    render() {
        return (
            <p className={`raspItem scheduleColor text-bold--large`}>
                {this.props.text}
            </p>
        )
    }
}

export default RaspItem;
