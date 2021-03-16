import React, { Component } from "react";
import Single from "./Context/Single/Single";
import Double from "./Context/Double/Double";
import { connect } from "react-redux";
import "./style.css";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diff: null,
      soon: false,
    };
  }

  componentDidMount() {
    const { pairtime } = this.props.rasp;
     const { date } = this.props.appTimer;
    const t = pairtime
      .split("—")[0]
      .split(":")
      .map((i) => Number(i));

    const curTime = date.getHours() * 60 + date.getMinutes();
    const nextPair = t[0] * 60 + t[1];
    const diffTime = nextPair - curTime;
    
    if (diffTime > 0 && diffTime <= 60) {
      this.setState({ diff: diffTime, soon: true });
    }
  }

  render() {
    const { diff, soon } = this.state;
    const { pairtime, pair } = this.props.rasp;
    const { isOdd } = this.props.appTimer;
    const { type, isDouble } = this.props;
    const info = [{}, {}];

    if (!pair.length) {
      return <Single isEmpty={true} timer={pairtime} />;
    }

    switch (type) {
      case "group":
        for (let i = 0; i < pair.length; i++) {
          info[i].underSubject = pair[i].teacher;
          info[i].leftInfo = !pair[i].subgroup
            ? null
            : `${pair[i].subgroup} подгруппа`;
          info[i].rightInfo = pair[i].aud;
        }
        break;
      case "teacher":
        for (let i = 0; i < pair.length; i++) {
          info[i].underSubject = pair[i].group;
          info[i].leftInfo = !pair[i].subgroup
            ? null
            : `${pair[i].subgroup} подгруппа`;
          info[i].rightInfo = pair[i].aud;
        }
        break;
      case "aud":
        for (let i = 0; i < pair.length; i++) {
          info[i].underSubject = pair[i].teacher;
          info[i].leftInfo = pair[i].group;
          info[i].rightInfo = !pair[i].subgroup
            ? null
            : `${pair[i].subgroup} подгруппа`;
        }
        break;
      default:
        break;
    }
    
    return isDouble ? (
      <Double
        type={type}
        soon={soon}
        diff={diff}
        data={pair}
        info={info}
        opacity={!isOdd}
        timer={pairtime}
      />
    ) : (
      <Single
        type={type}
        soon={soon}
        diff={diff}
        timer={pairtime}
        opacity={!!isOdd}
        subject={pair[0].subject}
        underSubject={info[0].underSubject}
        leftInfo={info[0].leftInfo}
        rightInfo={info[0].rightInfo}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appTimer: state.appTimer,
  };
};

export default connect(mapStateToProps)(Card);
