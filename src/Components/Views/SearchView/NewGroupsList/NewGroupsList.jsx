import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from "../../../MenuItem/MenuItem";
import {Link} from 'react-router-dom';
import "./style.css";

class NewGroupsList extends Component {
  getList() {
    const { groupsList, match } = this.props;

    if (groupsList.length === 0) {
        return 'Список пуст'
    }
    
    return groupsList.map((group) => {
      return (
        <Link
          key={group.groupname}
          to={`${match.url}/groupid=${group.groupid}`}
        >
          <MenuItem text={group.groupname} />
        </Link>
      );
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
    groupsList: state.newGroupsList,
  };
};

export default connect(mapStateToProps)(NewGroupsList);
