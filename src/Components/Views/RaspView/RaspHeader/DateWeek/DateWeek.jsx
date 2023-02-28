import React, {Component} from "react";
import {connect} from "react-redux";
import "./style.css"
import Consts from "../../../../../helpers/consts";
import consts from "../../../../../helpers/consts";
import calendar_dark from "./Icons/Calendar-icon.svg";

class DateText extends Component {

    getHeaderWeek() {
        const {windowSizes, weekIsOdd} = this.props;

        if (windowSizes.width < consts.DESKTOP_MIN_WIDTH) {
            return weekIsOdd ? "1-я неделя" : "2-я неделя";
        } else {
            return weekIsOdd ? "первая неделя" : "вторая неделя";
        }
    }

    getMobileView() {
        return (
            <p className={"date-week text-regular--medium"}>{this.getHeaderWeek()}</p>
        )
    }

    getDesktopView() {
        const date = new Date();
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        let dateText = date.toLocaleDateString("ru", options);

        dateText = dateText.substring(0, dateText.length - 3); // удаляем лишние буквы из года
        dateText += ` — ${this.getHeaderWeek()}`;

        return (
            <div className="date-week">
                <img className={"date_calendar"} src={calendar_dark} alt="error"/>
                <p>{dateText}</p>
            </div>
        )
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
        windowSizes: state.windowSizes
    };
};

export default connect(mapStateToProps)(DateText);