import React, { Component } from "react";
import { generateUniqKey } from "../../../../helpers/helpers";
import { connect } from "react-redux";
import Card from "./Card/Card";
import RaspItem from "../../../RaspItem/RaspItem";
import "./style.css";

class Schedule extends Component {
  getCommonRasp(curDay) {
    let resList = [];
    let isDouble = false;
    const { pairList } = curDay;

    pairList.map((item, index) => {
      if (item.pair.length > 0 && item.pair[0].week !== 0) isDouble = true;
      resList.push(
        <Card
          key={generateUniqKey("Card_", index)}
          rasp={item}
          type={this.props.type}
          isDouble={isDouble}
        />
      );
      return (isDouble = false);
    });
    return resList;
  }

  getRasp(curDay) {
    const { day } = this.props.raspData.data;
    let isEmpty = true;

    if (!day[curDay].special_day) {
      day[curDay].pairList.map((item) => {
        if (item.pair.length !== 0) isEmpty = false;
        return null;
      });
    } else return <RaspItem text="Занятия по особому расписанию" />;

    return isEmpty ? (
      <RaspItem text="Занятий нет" />
    ) : (
      this.getCommonRasp(day[curDay])
    );
  }

  render() {
    const { loading } = this.props.raspData;
    const { dayIndex } = this.props.appTimer;

    if (loading === false) {
      return <div className={"Schedule"}>{this.getRasp(dayIndex)}</div>;
    } else return <div />;
  }
}

const mapStateToProps = (state) => {
  return {
    appTimer: state.appTimer,
    raspData: state.raspData,
  };
};

export default connect(mapStateToProps)(Schedule);
