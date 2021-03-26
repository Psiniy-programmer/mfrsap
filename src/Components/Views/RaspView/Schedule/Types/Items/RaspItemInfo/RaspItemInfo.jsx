import React, { Component } from "react";

class RaspItemInfo extends Component {
  render() {
    const { type, children, opacity, addiClass } = this.props;
    let subClass = '';

    if (type === 'aud') {
      subClass = 'aud_rasp__item_info';
    } else {
      subClass = 'rasp__item_info';
    }
   
    return (
      <div className={`${subClass} ${opacity ? "" : "opacity"} ${addiClass}`}>
        {children}
      </div>
    );
  }
}

export default RaspItemInfo;
