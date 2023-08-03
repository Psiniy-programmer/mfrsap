import React, {Component} from "react";
import {connect} from "react-redux";
import Consts from "../../helpers/consts";
import {updateTime, weekIsOdd, getWeekNumber} from '../../actions/appTimer';
import {desktopCarouselData} from '../../helpers/helpData';

class DateWeek extends Component {
    componentDidMount() {
        const {updateTime, weekIsOdd, getWeekNumber} = this.props;

        updateTime();
        weekIsOdd();
        getWeekNumber();
    }

    getMobileView() {
        const {weekNumber} = this.props.appTimer;

        return `${weekNumber}-я неделя`
    }

    getDesktopView(showDate = false, showWeek = false, showOdd = false, showDay = false) {
        const {date, isOdd, weekNumber, todayIndex} = this.props.appTimer;

        const options = {
            month: "long",
            day: "numeric",
        };
        
        let dateText = date.toLocaleDateString("ru", options);
        let result = [];

        if (showDate) {
            result = [...result, dateText]
        }

        if (showWeek) {
            result = [...result, `${weekNumber}-я неделя`]
        }

        if (showOdd) {
            result = [...result, `${isOdd ? "числитель" : "знаменатель"}`]
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
        windowSizes: state.windowSizes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateTime: () => {
            dispatch(updateTime());
        },
        weekIsOdd: () => {
            dispatch(weekIsOdd());
        },
        getWeekNumber: () => {
            dispatch(getWeekNumber());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateWeek);