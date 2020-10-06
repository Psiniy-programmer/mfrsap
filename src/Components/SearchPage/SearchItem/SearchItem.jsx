import React, {Component} from 'react';
import './style.css'

class SearchItem extends Component {
    render() {
        return (
            <div {...this.props} className={'SearchItem'}>
                <p >{this.props.text}</p>
            </div>
        );
    }
}

export default SearchItem;
