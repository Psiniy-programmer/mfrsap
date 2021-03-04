import React, { Component } from "react";
import MenuItem from "../../../../MenuItem/MenuItem";
import { switchNumber } from "../../../../../helpers/helpers";
import Consts from "../../../../../helpers/consts";
import "./style.css";

class CourseListType extends Component {
  parseData() {
    const { data, courseType } = this.props;
    const res = [];
    console.log(data);

    for (let course in data) {
      let text = switchNumber(course) + " курс";
      res.push(<MenuItem text={text} />);
    }
    return res;
  }

  render() {
    const { courseType } = this.props;

    return (
      <div className='CourseType'>
        <p className="textColor">{Consts.PREFIX[courseType]}</p>
        {this.parseData()}
      </div>
    );
  }
}

export default CourseListType;
