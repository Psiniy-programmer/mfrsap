import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import {
  changeLangEngToRus, clearSuffix,
  finderIsEmpty,
  mergeObjects,
} from "../../../../helpers/helpers";
import CourseListType from "./CourseListType/CourseListType";

class CourseList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  normalizeObject(obj) {
    return {
      "Б" : obj["Б"],
      "М" : obj["М"],
      "А" : obj["А"],
      "С" : obj["С"]
    }
  }

  setGroups(group, obj) {
    let groupSem = group.groupname.split("-")[1][0];
    let groupCourse = Math.floor(groupSem / 2) + 1;
    let test = {};
    if (obj[groupCourse] === undefined) {
      obj[groupCourse] = [];
    } else {
             obj[groupCourse].push(group.groupname);
             test[groupCourse] = {};
           }
  }

  sortGroupsByCourse() {
    const { data } = this.props.altList;
    const { params } = this.props.match;
    const fac = changeLangEngToRus(params.faculty);
    const department = changeLangEngToRus(params.department);
    let nextState = {};

    for (let type in data[fac]) {
      let temp = {};

      data[fac][type].map((group) => {

        let split = group.groupname.split("-");

        if (split[0] === department) {
          let groupSem = split[1][0];
          let groupCourse = Math.floor(groupSem / 2);

          if (temp[groupCourse] === undefined) {
            temp[groupCourse] = [];
            temp[groupCourse].push(group);
          } else {
            temp[groupCourse].push(group);
          }
        }
        return group;
      });

      nextState[type.toString()] = temp;
    }
      
    if (
      nextState["С"] !== undefined &&
      Object.keys(nextState["С"]).length !== 0
    ) {
      nextState["Б"] = mergeObjects(nextState["С"], nextState["Б"]);
      nextState["Б"] = clearSuffix(nextState["Б"])
      nextState["Б"].merged = true;
    }
    
    nextState = this.normalizeObject(nextState);
    this.setState(nextState);
  }

  componentDidMount() {
    this.sortGroupsByCourse();
  }

  getCourseList() {
    const res = [];

    for (let key in this.state) {
      if (
        this.state[key] !== undefined &&
        Object.keys(this.state[key]).length !== 0 &&
        key !== "С"
      ) {
        res.push(
          <CourseListType
            url={this.props.match.url}
            key={key}
            data={this.state[key]}
            courseType={key}
          />
        );
      }
    }

    return res;
  }

  render() {
    const { findInput } = this.props;

    return (
      <div
        className={`CourseList ${
          finderIsEmpty(findInput) ? "CourseListHide" : ""
        }`}
      >
        {this.getCourseList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    findInput: state.filterItems,
    altList: state.altList,
  };
};

export default connect(mapStateToProps)(CourseList);
