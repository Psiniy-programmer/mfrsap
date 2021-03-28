import React, { Component } from "react";

class DoubleInfo extends Component {
  render() {
    const { type, children, opacity } = this.props;
    let subClass = '';

    if (type === 'aud') {
      subClass = 'aud_rasp__item_info';
    } else {
      subClass = 'rasp__item_info';
    }
   
    return (
      <div className={`${subClass} ${opacity ? "" : "opacity"} `}>
        {children}
      </div>
    );
  }
}

export default DoubleInfo;
