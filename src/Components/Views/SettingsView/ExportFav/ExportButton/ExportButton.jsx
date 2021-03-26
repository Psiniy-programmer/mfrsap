import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

const key = "GENERATED";

class ExportButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generated: localStorage.getItem(key),
      copyAction: false,
    };

    this.setHandleClick = this.setHandleClick.bind(this);
  }

  setHandleClick() {
    const code = "DKLAD7#ARJL^JLR9393#";
    localStorage.setItem(key, code);
    this.setState({ generated: code });
  }

  render() {
    const { generated } = this.state;
    const { isMobile, func } = this.props;

    if (generated === null) {
      return (
        <div
          onClick={this.setHandleClick}
          className={`ExportButton ${
            isMobile ? "text-medium--small" : "text-medium--medium"
          } raspTextColor`}
        >
          Сгенерировать код
        </div>
      );
    } else {
      return (
        <input
          onClick={func}
          className={`Input textColor ${
            isMobile ? "text-medium--small" : "text-medium--medium"
          }`}
          type="text"
          placeholder="Код"
          value={generated}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.windowSizes.isMobile,
  };
};

export default connect(mapStateToProps)(ExportButton);
