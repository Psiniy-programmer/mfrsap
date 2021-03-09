import React, { Component } from "react";
import MenuItem from "../../../../MenuItem/MenuItem";
import { connect } from "react-redux";
import { switchNumber } from "../../../../../helpers/helpers";
import Consts from "../../../../../helpers/consts";
import { Link } from "react-router-dom";
import "./style.css";
import setNewGroupsList from "../../../../../actions/newGroupsList";

class CourseListType extends Component {
  parseData() {
    const { data, url, setList } = this.props;
    const res = [];

    for (let course in data) {
      if (course === "merged") {
        continue;
      }

      let courseNumber = switchNumber(course);
      let text = courseNumber + " курс";
      res.push(
        <Link
          onClick={() => setList(data[course])}
          key={text}
          className="Link"
          to={`${url}/${courseNumber}`}
        >
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setList: (payload) => {
      dispatch(setNewGroupsList(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseListType);
