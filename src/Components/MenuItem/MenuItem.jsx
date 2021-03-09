import React, {Component} from 'react';
import './style.css'

class MenuItem extends Component {
  render() {
    return (
      <p
        className={`MenuItem ${
          this.props.subclass !== undefined ? this.props.subclass : ""
        } text-medium--small raspTextColor`}
      >
        {this.props.text}
      </p>
    );
  }
}

export default MenuItem;
