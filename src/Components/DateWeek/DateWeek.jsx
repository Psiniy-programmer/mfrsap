import React, {Component} from "react";
import {connect} from "react-redux";
import Consts from "../../helpers/consts";
import {updateTime, weekIsOdd, getWeekNumber} from '../../actions/appTimer';

class DateWeek extends Component {
    componentDidMount() {
        const {updateTime, weekIsOdd, getWeekNumber, raspConfig} = this.props;

        updateTime();
        weekIsOdd(raspConfig);
        getWeekNumber(raspConfig);
    }

    getMobileView() {
        const {weekNumber} = this.props.appTimer;

        return `${weekNumber}-я неделя`
    }

    getDesktopView(showDate = false, showWeek = false, showOdd = false, showDay = false) {
        const {date, isOdd, weekNumber} = this.props.appTimer;
        const {raspConfig} = this.props;

        const semesterStart = new Date(raspConfig.semester_start);
        const isSemesterStarted =  semesterStart < date;

        let result = [];

        if (showDate) {
            const dateText = date.toLocaleDateString("ru", {
                month: "long",
                day: "numeric"
            });

            result = [...result, dateText];
        }

        if (showWeek) {
            const semesterStartText = semesterStart.toLocaleDateString("ru", {
                month: "long",
                day: "numeric"
            });

            result = isSemesterStarted 
                ? [...result, `${weekNumber}-я неделя`]
                : [...result, `Занятия начнутся ${semesterStartText}`];
        }

        if (showOdd) {
            result = isSemesterStarted
                ? [...result, `${isOdd ? "числитель" : "знаменатель"}`]
                : [...result, `${isOdd ? "по числителю" : "по знаменателю"}`];
        }

        if (showDay) {
            const dayText = date.toLocaleDateString("ru", {
                weekday: "long"
            });

            result = [...result, dayText];
        }

        return result.join(', ');
    }

    render() {
        const {windowSizes, showDate, showWeek, showOdd, showDay} = this.props;

        return windowSizes.width > Consts.DESKTOP_MIN_WIDTH
            ? this.getDesktopView(showDate, showWeek, showOdd, showDay)
            : this.getMobileView();
    }
}

const mapStateToProps = (state) => {
    return {
        appTimer: state.appTimer,
        windowSizes: state.windowSizes,
        raspConfig: state.raspConfig.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateTime: () => {
            dispatch(updateTime());
        },
        weekIsOdd: (raspConfig) => {
            dispatch(weekIsOdd(raspConfig));
        },
        getWeekNumber: (raspConfig) => {
            dispatch(getWeekNumber(raspConfig));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateWeek);