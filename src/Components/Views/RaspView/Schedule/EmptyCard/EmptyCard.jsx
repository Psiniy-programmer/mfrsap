import React, { Component } from "react";
import "./style.css";

class EmptyCard extends Component {
  render() {
    return (
      <div className={"emptyCard scheduleColor"}>
        {this.props.children}
        <p className="emptyCard__text text-bold--large">Занятия нет</p>
      </div>
    );
  }
}

export default EmptyCard;
