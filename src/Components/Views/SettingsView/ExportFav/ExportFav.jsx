import React, { Component } from "react";
import ExportButton from "./ExportButton/ExportButton";
import "./style.css";

class ExportFav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyAction: false,
    };

    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    navigator.clipboard.writeText(this.state.generated);
    this.setState({ copyAction: true });
  }

  render() {
    return (
      <div className="Export">
        <h2 className={"text-bold--header textColor"}>Экспорт избранного</h2>
        <div className="Export__content">
          <ExportButton func={this.handleCopy} copyAction={this.state.copyAction} />
          <p className="textColor text-regular--small">
            Скопируйте код и затем вставьте его в форму на странице избранного
            на новом устройстве.
          </p>
          
        </div>
      </div>
    );
  }
}

export default ExportFav;
