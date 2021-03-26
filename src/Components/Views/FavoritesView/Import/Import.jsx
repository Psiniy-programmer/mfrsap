import React, { Component } from "react";
import { connect } from "react-redux";

class Import extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ code: this.codeInput.value });
  }

  render() {
    const { isMobile } = this.props;
    const { code } = this.state;

    return (
      <div className="import">
        <input
          onChange={this.handleChange}
          placeholder="Код"
          className={`Input textColor ${
            isMobile ? "text-medium--small" : "text-medium--medium"
          }`}
          type="text"
          value={code}
          ref={(input) => {
            this.codeInput = input;
          }}
        />
        OK
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.windowSizes.isMobile,
  };
};

export default connect(mapStateToProps)(Import);
