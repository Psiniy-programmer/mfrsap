import React, { Component } from 'react'

class RaspItem extends Component {
    render() {
        return (
            <p className={'textColor text-bold--large'}>
                {this.props.text}
            </p>
        )
    }
}

export default RaspItem;
