import React, {Component} from "react";
import {connect} from "react-redux";
import Consts from "../../helpers/consts";
import {updateTime, weekIsOdd, getWeekNumber} from '../../actions/appTimer';
import {desktopCarouselData} from '../../helpers/helpData';

class DateWeek extends Component {
    componentDidMount() {
        const {updateTime, weekIsOdd, getWeekNumber, semesterStart} = this.props;

        updateTime();
        weekIsOdd(semesterStart);
        getWeekNumber(semesterStart);
    }

    getMobileView() {
        const {weekNumber} = this.props.appTimer;

        return `${weekNumber}-я неделя`
    }

    getDesktopView(showDate = false, showWeek = false, showOdd = false, showDay = false) {
        const {date, isOdd, weekNumber, todayIndex} = this.props.appTimer;
        const {semesterStart} = this.props;
        
        const options = {
            month: "long",
            day: "numeric"
        };
        
        const dateText = date.toLocaleDateString("ru", options);

        const semesterStartDate = new Date(semesterStart.semesterStartDate);
        const semesterStartDateText = semesterStartDate.toLocaleDateString("ru", options);
        const isSemesterStarted =  semesterStartDate < date;

        let result = [];

        if (showDate) {
            result = [...result, dateText];
        }

        if (showWeek) {
            result = isSemesterStarted 
                ? [...result, `${weekNumber}-я неделя`] 
                : [...result, `Занятия начнутся ${semesterStartDateText}`];
        }

        if (showOdd) {
            result = isSemesterStarted
                ? [...result, `${isOdd ? "числитель" : "знаменатель"}`]
                : [...result, `${isOdd ? "по числителю" : "по знаменателю"}`];
        }

        if (showDay) {
            if (todayIndex === 0 ) {
                result = [...result, 'воскресенье']
            } else {
                result = [...result, `${desktopCarouselData[todayIndex - 1].rus.toLocaleLowerCase()}`]
            }
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
        semesterStart: state.semesterStart.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateTime: () => {
            dispatch(updateTime());
        },
        weekIsOdd: (semesterStart) => {
            dispatch(weekIsOdd(semesterStart));
        },
        getWeekNumber: (semesterStart) => {
            dispatch(getWeekNumber(semesterStart));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateWeek);