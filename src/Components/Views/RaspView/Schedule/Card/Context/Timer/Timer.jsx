import React, {Component} from 'react';
import './style.css'
import clock_icon from "./icons/clock-icon.svg";
import dark_clock_icon from "./icons/dark-clock-icon.svg"
import {connect} from "react-redux";
import {DARK_THEME, LIGHT_THEME, SYSTEM_THEME} from "../../../../../../../reducers/theme";

class Timer extends Component {
    getTimerIcon() {
        const {currentTheme} = this.props;

        switch (currentTheme) {
            case SYSTEM_THEME :
                return matchMedia('(prefers-color-scheme: dark)').matches ? clock_icon : dark_clock_icon
            case LIGHT_THEME :
                return dark_clock_icon
            case DARK_THEME :
                return clock_icon
            default:
                break;
        }
    }

    render() {
        return <div className={`context__timer textColor`}>
            <img src={this.getTimerIcon()} alt="clockErrorIcon"/>
            <p className={'text-regular--small'}>{this.props.timer}</p>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        currentTheme: state.theme
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);