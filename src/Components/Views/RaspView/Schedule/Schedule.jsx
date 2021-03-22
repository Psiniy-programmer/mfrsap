import React, { Component } from "react";
import { connect } from "react-redux";
import RaspItem from "../../../RaspItem/RaspItem";
import "./style.css";
import Group from "./Types/Group/Group";
import Teacher from "./Types/Teacher/Teacher";

class Schedule extends Component {
  
  getCommonRasp(curDay) {
    const { pairList } = curDay;
    const { type } = this.props;

    switch(type) {
      case 'group':
        return <Group pairList={pairList} />;
      case 'teacher':
        return <Teacher pairList={pairList}/>;
      default:
        break;
    }
  }

  getRasp(curDay) {
    const { day } = this.props.raspData.data;
    let isEmpty = true;
    console.log(day);
    if (day !== undefined && !day[curDay].special_day) {
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
