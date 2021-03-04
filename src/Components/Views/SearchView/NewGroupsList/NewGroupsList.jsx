import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from "../../../MenuItem/MenuItem";
import "./style.css";

class NewGroupsList extends Component {
  getList() {
    const { groupsList } = this.props;
    console.log(groupsList)
    if (groupsList.length === 0) {
        return 'Список пуст'
    }
    return groupsList.map((group) => {
      return <MenuItem key={group} text={group} />;
    });
  }

  render() {
    console.log(this.props.groupsList);

    return <div className="NewGroupsList">
        {this.getList()}
        </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    groupsList: state.newGroupsList,
  };
};

export default connect(mapStateToProps)(NewGroupsList);
