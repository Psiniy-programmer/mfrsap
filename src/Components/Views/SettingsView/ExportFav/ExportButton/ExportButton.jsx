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
    // localStorage.setItem(key, code);
    // this.setState({ generated: code });
    let test = {"groups":["К5-61Б"],"teachers":["Пересунько Е.А.","Малашин А.А."],"auditoryies":["365"]}
    let response = fetch('https://mf.bmstu.ru/rasp/api/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(test)
    })
    .then(result => console.log('res', result))
    .catch(er => console.log('er', er));
  }

  render() {
    const { generated } = this.state;
    const { isMobile, func } = this.props;
    console.log(JSON.stringify(this.props.storage));

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
    storage: state.favoriteStorage
  };
};

export default connect(mapStateToProps)(ExportButton);
