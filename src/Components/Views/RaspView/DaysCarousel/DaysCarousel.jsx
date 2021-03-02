import React, { Component } from "react";
import "./style.css";
import { generateUniqKey } from "../../../../helpers/helpers";
import { connect } from "react-redux";
import {
  desktopMobileData,
  mobileDaysData,
} from "../../../../helpers/helpData";
import Consts from "../../../../helpers/consts";

class DaysCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monday: true,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
    };
  }

  componentDidMount() {
    const { currentDayIndex } = this.props;
    let stateIndex = 0;
    if (currentDayIndex === -1) stateIndex = 1; // Если вскр, то перекидываем на пн
    for (let key in this.state) {
      stateIndex === currentDayIndex
        ? this.setState({ [key]: true })
        : this.setState({ [key]: false });
      stateIndex++;
    }
  }

  handleClick(day) {
    let tempObj = this.state;
    let curday = null;
    let dayIndex = 0;
    for (let key in tempObj) {
      if (key === day) {
        tempObj[key] = true;
        curday = dayIndex;
      } else tempObj[key] = false;
      dayIndex++;
    }
    this.setState({ days: tempObj });
    this.props.updateDays(curday);
  }

  getDayList() {
    let resArr = [];
    const daysData =
      this.props.windowSizes.width > Consts.DESKTOP_MIN_WIDTH
        ? desktopMobileData
        : mobileDaysData;
    daysData.map((item, index) =>
      resArr.push(
        <div
          key={generateUniqKey("days", index)}
          onClick={this.handleClick.bind(this, item.eng)}
          className={`DayItem DayItem_${
            this.state[item.eng] ? "active" : "unActive"
          }`}
        >
          {" "}
          {item.rus}
        </div>
      )
    );
    return resArr;
  }

  getMobileView() {
    return (
      <div className={"scroller-container"}>
        <div className="container-wrapper">
          <div className={"DaysCarousel"}>
            <div className="DaysCarousel-wrap">{this.getDayList()}</div>
          </div>
        </div>
      </div>
    );
  }

  getDesktopView() {
    return <div className={"DaysCarousel"}>{this.getDayList()}</div>;
  }

  render() {
    const { windowSizes } = this.props;
    return windowSizes.width > Consts.DESKTOP_MIN_WIDTH
      ? this.getDesktopView()
      : this.getMobileView();
  }
}

const mapStateToProps = (state) => {
  return {
    windowSizes: state.windowSizes,
  };
};

export default connect(mapStateToProps)(DaysCarousel);
