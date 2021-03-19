import React, { Component } from "react";
import Timer from "../../Card/Context/Timer/Timer";
import { connect } from "react-redux";
import "./style.modules.css";
import EmptyCard from "../../EmptyCard/EmptyCard";

class Group extends Component {
  checkItem(item) {
    console.log(item);
    return item !== undefined && item.length !== 0;
  }

  getTimer(cur) {
    const { pairtime } = cur;
    const { date } = this.props.appTimer;
    const t = pairtime
      .split("—")[0]
      .split(":")
      .map((i) => Number(i));
    let res = { diff: null, soon: false, timer: pairtime };

    const curTime = date.getHours() * 60 + date.getMinutes();
    const nextPair = t[0] * 60 + t[1];
    const diffTime = nextPair - curTime;
    // const diffTime = 40;

    if (diffTime > 0 && diffTime <= 60) {
      res.diff = diffTime;
      res.soon = true;
    }

    return <Timer soon={res.soon} diff={res.diff} timer={res.timer} />;
  }

  checkIsDouble(cur) {
    const { pair } = cur;
    let isDouble = false;

    if (pair.length > 1) {
      isDouble = true;
    }

    return isDouble;
  }

  getRasp() {
    const { pairList } = this.props;
    const res = [];

    pairList.forEach((item, index) => {
      if (this.checkIsDouble(item)) {
        return res.push(
          "double"
          // <div className={"rasp__item"}>{this.getPair(item)}</div>
        );
      } else {
        return res.push(this.getSinglePair(item, index));
      }
    });
    return res;
  }

  getSinglePair(item, pairIndex) {
    const { pair } = item;

    if (pair[0] === undefined || pair[0].length === 0) {
      return <EmptyCard index={pairIndex}>{this.getTimer(item)}</EmptyCard>;
    }

    const res = [];
    const timer = this.getTimer(item);
    const aud = this.checkItem(pair[0].aud) ? pair[0].aud : <p>----</p>;

    if (this.checkItem(pair[0].subject)) {
      res.push(<h4 className="pair__item_teacher">{pair[0].subject}</h4>);
    }

    if (this.checkItem(pair[0].teacher)) {
      res.push(<p>{pair[0].teacher}</p>);
    }

    if (this.checkItem(pair[0].subgroup)) {
      res.push(<p>{pair[0].subgroup}</p>);
    }

    console.error(pair);

    return (
      <div className={"rasp__item"}>
        {timer}
        <div className="rasp__item_info">
          <div className="rasp__item_main">{res}</div>
          <p className="rasp__item_aud">{aud}</p>
        </div>
      </div>
    );
  }

  render() {
    return <div className="rasp">{this.getRasp()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    appTimer: state.appTimer,
  };
};

export default connect(mapStateToProps)(Group);
