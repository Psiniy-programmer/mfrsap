import React, {Component} from 'react';
import './style.css'
import clock_icon from "./icons/clock-icon.svg";
import dark_clock_icon from "./icons/dark-clock-icon.svg"

class Timer extends Component {
    render() {
        const isDark = matchMedia('(prefers-color-scheme: dark)')
        return <div className={`context__timer textColor`}>
            <img src={isDark.matches ? clock_icon : dark_clock_icon} alt="clockErrorIcon"/>
            <p className={'text-regular--small'}>{this.props.timer}</p>
        </div>
    }
}

export default Timer;