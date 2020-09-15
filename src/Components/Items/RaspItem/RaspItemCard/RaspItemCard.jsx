import React, {Component} from 'react';

import './style.css';

class RaspItemCard extends Component {
    render() {
        return (
            <div className={'RaspItemCard'}>
                {this.props.time}
            </div>
        );
    }
}

export default RaspItemCard;