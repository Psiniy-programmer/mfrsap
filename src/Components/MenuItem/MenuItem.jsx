import React, { Component } from "react";
import { connect } from "react-redux";
import consts from "../../helpers/consts";
import "./style.css";

class MenuItem extends Component {
  render() {
    const { windowWidth, subclass, text } = this.props;
    const isMobile = windowWidth > consts.DESKTOP_MIN_WIDTH;

    return (
      <p
        className={`MenuItem ${subclass !== undefined ? subclass : ""} ${
          isMobile ? "text-medium--medium" : "text-medium--small"
        } raspTextColor`}
      >
        {text}
      </p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    windowWidth: state.windowSizes.width,
  };
};

export default connect(mapStateToProps)(MenuItem);
