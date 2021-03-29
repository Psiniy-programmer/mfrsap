import React, {Component} from 'react';

class SingleInfo extends Component {
  render() {
    const {diff, children, type} = this.props;
    const op = diff.soon ? 'soon' : '';
    let subClass = '';

    if (type === 'aud') {
      subClass = 'aud_rasp__item_info';
    } else {
      subClass = 'rasp__item_info';
    }

    return (
        <div
            className={`${subClass} ${diff.soon ? 'soon' : ''}`}
        >
          {children}
        </div>
    );
  }
}

export default SingleInfo;