import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { changeLangEngToRus, finderIsEmpty, mergeObjects } from "../../../../helpers/helpers";
import CourseListType from "./CourseListType/CourseListType";

class CourseList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  setGroups(group, obj) {
    let groupSem = group.groupname.split("-")[1][0];
    let groupCourse = Math.floor(groupSem / 2) + 1;

    if (obj[groupCourse] === undefined) {
      obj[groupCourse] = [];
    } else {
      obj[groupCourse].push(group.groupname);
    }
  }

  sortGroupsByCourse() {
    const { data } = this.props.altList;
    const { params } = this.props.match;
    const fac = changeLangEngToRus(params.faculty);
    const department = changeLangEngToRus(params.department);
    const nextState = {};

    for (let type in data[fac]) {
      let temp = {};

      data[fac][type].map((group) => {
        let split = group.groupname.split("-");

        if (split[0] === department) {
          let groupSem = split[1][0];
          let groupCourse = Math.floor(groupSem / 2) + 1;

          if (temp[groupCourse] === undefined) {
            temp[groupCourse] = [];
            temp[groupCourse].push(group.groupname);
          } else {
            temp[groupCourse].push(group.groupname);
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
      mergeObjects(nextState["С"], nextState["Б"]);
      nextState["Б"].merged = true;
    }

    this.setState(nextState);
  }

  componentDidMount() {
    this.sortGroupsByCourse();
  }

  getCourseList() {
    const res = [];
    for (let key in this.state) {
      if (Object.keys(this.state[key]).length !== 0 && key !== "С") {
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
        {/* <Link className={`Link`} to={`${match.url}/I`}><MenuItem text={'I курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/II`}><MenuItem text={'II курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/III`}><MenuItem text={'III курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/IV`}><MenuItem text={'IV курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/V`}><MenuItem text={'V курс'}/></Link>
                <Link className={`Link`} to={`${match.url}/VI`}><MenuItem text={'I курс магистратура'}/></Link>
                <Link className={`Link`} to={`${match.url}/VII`}><MenuItem text={'II курс магистратура'}/></Link> */}
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
