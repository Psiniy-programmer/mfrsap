import React, {Component} from 'react';
import './style.css'

class SearchItem extends Component {
    render() {
        return (
            <div {...this.props} className={'SearchItem '}>
                <p className={`SearchItem-item ${this.props.subClass !== undefined ? this.props.subClass : ''}`}>
                    {this.props.text}
                </p>
            </div>
        );
    }
}

export default SearchItem;
