import React, { Component } from "react";
import Timer from "../../Card/Context/Timer/Timer";
import { connect } from "react-redux";
import EmptyCard from "../../EmptyCard/EmptyCard";
import {
  checkItem,
  getTimer,
  checkIsDouble,
} from "../../../../../../helpers/helpers";
import {checkOnArr} from "../../../../../../helpers/helpers";
import "./style.css";

class Group extends Component {
  getContext(item, index, soon) {
    const arr = [];
    const temp = [];

    if (item.length === 0 || Object.keys(item[index]).length === 0) {
      return <EmptyCard soon={soon}/>
    }

    const aud = checkItem(item[index].aud) ? (
      <p className="text-regular--small">{checkOnArr(item[index].aud)}</p>
    ) : (
      <p>----</p>
    );

    if (checkItem(item[index].subject)) {
      temp.push(
        <h4
          key={item[index].subject}
          className="pair__item_subject text-bold--large"
        >
          {item[index].subject}
        </h4>
      );
    }

    if (checkItem(item[index].subgroup)) {
      temp.push(
        <p
          className="pair__item_subgroup text-regular--small"
          key={item[index].subgroup}
        >
          {item[index].subgroup + " подгруппа"}
        </p>
      );
    }

    if (checkItem(item[index].teacher)) {
      arr.push(
        <p
          className="pair__item_teacher text-regular--small"
          key={item[index].teacher}
        >
          {item[index].teacher}
        </p>
      );
    }

    arr.push(<div key={'temp'} className="item__main">{temp}</div>);

    return (
      <>
        <div className="rasp__item_main">{arr}</div>
        <div className="rasp__item_aud">{aud}</div>
      </>
    );
  }

  getRasp() {
    const { pairList } = this.props;
    const res = [];

    pairList.forEach((item) => {
      if (checkIsDouble(item)) {
        return res.push(this.getDoublePair(item));
      } else {
        return res.push(this.getSinglePair(item));
      }
    });
    return res;
  }

  getSinglePair(item) {
    const { pair } = item;
    const diff = getTimer(item, this.props.appTimer.date);
    const timer = (
      <Timer soon={diff.soon} diff={diff.diff} timer={diff.timer} />
    );
    const res = this.getContext(pair, 0, diff.soon);

    return (
      <div key={diff.timer} className={`rasp__item ${diff.soon ? "soon" : ""}`}>
        {timer}
        <div className={`rasp__item_info ${diff.soon ? 'soon' : 'scheduleColor'}`}>{res}</div>
      </div>
    );
  }

  getDoublePair(item, pairIndex) {
    const { pair } = item;
    const diff = getTimer(item, this.props.appTimer.date);
    const timer = (
      <Timer soon={diff.soon} diff={diff.diff} timer={diff.timer} />
    );

    if (!checkItem(pair[0])) {
      return <EmptyCard index={pairIndex} soon={diff.soon}>{timer}</EmptyCard>;
    }

    const num = this.getContext(pair, 0, diff.soon);
    const denum = this.getContext(pair, 1, diff.soon);

    return (
      <div key={item.pairnumber} className={`rasp__item scheduleColor `}>
        {timer}
        <div className="rasp__item_double">
          <div className="rasp__item_info">{num}</div>
          <div className="splitter" />
          <div className="rasp__item_info">{denum}</div>
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
