import React, {Component} from 'react';
import './style.css'

class MenuItem extends Component {
    render() {
        return (
            <div {...this.props} className={'MenuItem'}>
                <p >{this.props.text}</p>
            </div>
        );
    }
}

export default MenuItem;
