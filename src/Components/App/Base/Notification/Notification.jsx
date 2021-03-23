import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNotifyData } from "../../../../actions/notification";
import Consts from "../../../../helpers/consts";
import "./style.css";

class Notification extends Component {
  componentDidMount() {
    this.props.fetchNotify();
  }

  render() {
    const { data } = this.props.notification;
    const { hide, windowWidth } = this.props;
    const isMobile = windowWidth < Consts.DESKTOP_MIN_WIDTH;
   
    if (data.length === 0) {
      return <></>;
    } else {
      return (
        <a
          href={data[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className={`notification ${hide}`}
        >
          <p
            className={`notification__date ${
              isMobile ? "text-medium-small" : "text-medium--medium"
            }`}
          >
            {data[0].date}
          </p>
          <p className={`notification__text ${isMobile ? 'text-regular--small' : 'text-regular--medium'}`}>
            {data[0].text}
          </p>
        </a>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
    windowWidth: state.windowSizes.width,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotify: () => {
      dispatch(fetchNotifyData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
