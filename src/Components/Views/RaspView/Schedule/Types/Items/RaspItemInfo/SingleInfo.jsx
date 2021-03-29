import React, { Component } from "react";
import { connect } from "react-redux";

class SingleInfo extends Component {
  render() {
    const { diff, children, type, isMobile } = this.props;
    const op = diff.soon && isMobile ? "scheduleColor" : "";
    let subClass = "";
    console.log(isMobile)

    if (type === "aud") {
      subClass = "aud_rasp__item_info";
    } else {
      subClass = "rasp__item_info";
    }

    return (
      <div className={`${subClass} ${op}`}>
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isMobile: state.windowSizes.isMobile
  }
}

export default connect(mapStateToProps)(SingleInfo);
