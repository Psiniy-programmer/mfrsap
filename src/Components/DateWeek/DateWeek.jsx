import React, {Component} from "react";
import {connect} from "react-redux";
import Consts from "../../helpers/consts";

class DateWeek extends Component {

    getHeaderWeek() {
        const {windowSizes} = this.props;
        const {isOdd} = this.props.appTimer;

        if (windowSizes.width < Consts.DESKTOP_MIN_WIDTH) {
            return isOdd ? "1-я неделя" : "2-я неделя";
        } else {
            return isOdd ? "первая неделя" : "вторая неделя";
        }
    }

    getMobileView() {
        let dateWeek = this.getHeaderWeek();

        return (
            <div>{dateWeek}</div>
        )
    }

    getDesktopView() {
        const {date} = this.props.appTimer;
        const options = {
            month: "long",
            day: "numeric",
        };
        
        let dateWeek = this.getHeaderWeek();
        let dateText = date.toLocaleDateString("ru", options);

        return (
            <div>{`${dateText} — ${dateWeek}`}</div>
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
        appTimer: state.appTimer,
        windowSizes: state.windowSizes
    };
};

export default connect(mapStateToProps)(DateWeek);