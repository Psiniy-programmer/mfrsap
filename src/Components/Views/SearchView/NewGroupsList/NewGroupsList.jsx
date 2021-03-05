import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from "../../../MenuItem/MenuItem";
import "./style.css";
import {Link} from 'react-router-dom';

class NewGroupsList extends Component {
  getList() {
    const { oldList, groupsList, match } = this.props;

    if (groupsList.length === 0) {
        return 'Список пуст'
    }

    return groupsList.map((group) => {
      return <Link to={`${match.url}/groupid=${oldList.data[group].groupid}`}><MenuItem key={group} text={group} /></Link>;
    });
  }

  render() {

    return <div className="NewGroupsList">
        {this.getList()}
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    oldList: state.groupsList,
    groupsList: state.newGroupsList,
  };
};

export default connect(mapStateToProps)(NewGroupsList);
