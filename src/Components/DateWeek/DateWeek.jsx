import React, {Component} from "react";
import {connect} from "react-redux";
import Consts from "../../helpers/consts";
import {updateTime, getDayIndex, updateDayIndex, weekIsOdd, getWeekNumber} from '../../actions/appTimer';

class DateWeek extends Component {
    componentDidMount() {
        const {updateTime, weekIsOdd, getWeekNumber, getDayIndex} = this.props;

        getDayIndex();
        weekIsOdd();
        getWeekNumber();
        updateTime();
    }

    getMobileView() {
        const {weekNumber} = this.props.appTimer;

        return `${weekNumber}-я неделя`
    }

    getDesktopView() {
        const {date, isOdd, weekNumber} = this.props.appTimer;
        const options = {
            month: "long",
            day: "numeric",
        };
        
        let dateText = date.toLocaleDateString("ru", options);

        return `${dateText} — ${weekNumber}-я неделя, ${isOdd ? "числитель" : "знаменатель"}`
    }

    render() {
        const {windowSizes} = this.props;
        return windowSizes.width > Consts.DESKTOP_MIN_WIDTH
            ? this.getDesktopView()
            : this.getMobileView();
    }
}

const mapStateToProps = (state) => {
    return {
        appTimer: state.appTimer,
        windowSizes: state.windowSizes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateTime: () => {
            dispatch(updateTime());
        },
        getDayIndex: () => {
            dispatch(getDayIndex());
        },
        weekIsOdd: () => {
            dispatch(weekIsOdd());
        },
        getWeekNumber: () => {
            dispatch(getWeekNumber());
        },
        updateDayIndex: (index) => {
            dispatch(updateDayIndex(index));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateWeek);