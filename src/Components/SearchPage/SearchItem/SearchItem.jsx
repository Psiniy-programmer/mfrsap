import React, {Component} from 'react';
import './style.css'

class SearchItem extends Component {
    render() {
        return (
            <div {...this.props} className={'SearchItem '}>
                <p className={`SearchItem-item ${this.props.subclass !== undefined ? this.props.subclass : ''}`}>
                    {this.props.text}
                </p>
            </div>
        );
    }
}

export default SearchItem;
