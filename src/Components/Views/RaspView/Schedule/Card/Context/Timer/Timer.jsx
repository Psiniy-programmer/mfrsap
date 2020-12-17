import React, {Component} from 'react';
import './style.css'
import clock_icon from "../icons/clock-icon.svg";

class Timer extends Component {
    render() {
        return <div className={`context__timer textColor`}>
            <img src={clock_icon} alt="clockErrorIcon"/>
            <p className={'text-regular--small'}>{this.props.timer}</p>
        </div>
    }
}

export default Timer;