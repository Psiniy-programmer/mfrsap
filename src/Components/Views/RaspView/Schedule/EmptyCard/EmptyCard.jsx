import React, { Component } from "react";
import "./style.css";

class EmptyCard extends Component {
  render() {
    const {soon, children} = this.props;

    return (
      <div className={`emptyCard ${soon ? 'soon emptyCard__red' : 'scheduleColor'}`}>
        {children}
        <p className="emptyCard__text text-bold--large">Занятия нет</p>
      </div>
    );
  }
}

export default EmptyCard;
