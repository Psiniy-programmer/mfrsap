import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNotifyData } from "../../../../actions/notification";

class Notification extends Component {
  componentDidMount() {
    this.props.fetchNotify();
  }

  render() {
    const { data } = this.props.notification;
    console.log(data);
    
    return <div>notify</div>;
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
