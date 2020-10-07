import React, {Component} from 'react';
import './style.css'
import timer_icon from './icons/timer-icon.svg';
import clock_icon from './icons/clock-icon.svg';

class Context extends Component {
    getTimer() {
        const {timer} = this.props;
        if (timer !== undefined) {
            return <div className={'context__timer'}>
                <img src={clock_icon} alt="clockErrorIcon"/>
                <p className={'text-regular--small text-white'}>{timer}</p>
            </div>
        }
    }
    render() {
        const {timer, subject, underSubject, leftInfo, rightInfo} = this.props;
        return <div className={'context'}>
            {this.getTimer()}
            <h2 className={'context__subject text-bold--large text-white'}>{subject}</h2>
            <p className={'context__underSubject text-regular--small text-white'}>{underSubject}</p>
            <div className={'context__lastStr'}>
                <p className={'text-regular--small text-white'}>{leftInfo}</p>
                <p className={'text-regular--small text-white'}>{rightInfo}</p>
            </div>
        </div>
    }
}

export default Context;