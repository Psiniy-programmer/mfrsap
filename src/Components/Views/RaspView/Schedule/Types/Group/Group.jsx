import React, { Component } from "react";
import "./style.modules.css";

class Group extends Component {
  checkIsDouble(cur) {
    const { pair } = cur;
    let isDouble = false;

    if (pair.length > 1) {
        console.log(pair)
        isDouble = true;
    }

    return isDouble;
  }

  getRasp() {
    const { pairList } = this.props;

    pairList.forEach((item, index) => {
        if (this.checkIsDouble(item)) {
            this.getDouble(item);
        } else {
            this.getSingle(item);
        }
    })
  }

  getSingle(item) {
    console.log("SINGLE", item);
  }

  getDouble(item) {
    console.log("DOUBLE", item);
  }

  render() {
    const { pairList } = this.props;
    

    return <div className={"kekekeke"}>
        GROUP
        {this.getRasp()}
        </div>;
  }
}

export default Group;
