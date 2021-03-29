import React, { Component } from "react";
import { connect } from "react-redux";

class DoubleInfo extends Component {
  render() {
    const { type, children, opacity, isMobile } = this.props;
    let subClass = "";

    if (type === "aud") {
      subClass = "aud_rasp__item_info";
    } else {
      subClass = "rasp__item_info";
    }

    return (
      <div
        className={`${subClass} ${opacity ? "" : "opacity"} ${
          isMobile ? "scheduleColor" : ""
        }`}
      >
        {children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.windowSizes.isMobile,
  };
};

export default connect(mapStateToProps)(DoubleInfo);
