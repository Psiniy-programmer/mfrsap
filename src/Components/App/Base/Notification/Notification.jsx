import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNotifyData } from "../../../../actions/notification";
import "./style.css";

class Notification extends Component {
  componentDidMount() {
    this.props.fetchNotify();
  }

  render() {
    const { data } = this.props.notification;
    const {hide} = this.props;
    console.log(hide)
    if (data.length === 0) {
      return <></>;
    } else {
      return (
        <div className={`notification text-medium--medium ${hide}`}>
          <p className="notification__date">{data[0].date}</p>
          <p className="notification__text text-regular--medium">
            {data[0].text}
          </p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
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
