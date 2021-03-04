import React, { Component } from "react";
import MenuItem from "../../../../MenuItem/MenuItem";
import { switchNumber } from "../../../../../helpers/helpers";
import Consts from "../../../../../helpers/consts";
import "./style.css";
import { Link } from "react-router-dom";

class CourseListType extends Component {
  parseData() {
    const { data, url } = this.props;
    const res = [];

    for (let course in data) {
      if (course === "merged") {
        continue;
      }
      let courseNumber = switchNumber(course);
      let text = courseNumber + " курс";
      res.push(
        <Link key={text} className="Link" to={`${url}/${courseNumber}`}>
          <MenuItem text={text} />
        </Link>
      );
    }
    return res;
  }

  getType() {
    const { courseType, data } = this.props;
    let text = "";

    if (data.merged !== undefined && data.merged) {
      text = `${Consts.PREFIX[courseType]} и ${Consts.PREFIX.С}`;
    } else {
      text = Consts.PREFIX[courseType];
    }

    return <p className="textColor">{text}</p>;
  }

  render() {
    return (
      <div className="CourseType">
        {this.getType()}
        {this.parseData()}
      </div>
    );
  }
}

export default CourseListType;
