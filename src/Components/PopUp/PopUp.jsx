import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class PopUp extends Component {
  render() {
    const { isMobile } = this.props;
    return (
      <div
        className={`popUp textColor ${
          isMobile ? "text-regular--small" : "text-regular--medium"
        }`}
      >
        Код скопирован в буфер обмена
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.windowSizes.isMobile,
  };
};

export default connect(mapStateToProps)(PopUp);
