import React, {Component} from 'react';
import './style.css'
// import timer_icon from './icons/timer-icon.svg';
import clock_icon from './icons/clock-icon.svg';

class Context extends Component {
    getTimer() {
        const {timer} = this.props;
        if (timer !== undefined) {
            return <div className={'context__timer raspTextColor'}>
                <img src={clock_icon} alt="clockErrorIcon"/>
                <p className={'text-regular--small'}>{timer}</p>
            </div>
        }
    }

    render() {
        const {subject, underSubject, leftInfo, rightInfo, opacity} = this.props;
        return <>
            {this.getTimer()}
            <div className={`context ${opacity ? 'context_unactive' : 'context_active'} raspTextColor`}>
                <div className="context__leftInfo">
                    <h2 className={'context__subject text-bold--large '}>{subject}</h2>
                    {underSubject !== '' ? <p className={'context__underSubject text-regular--small '}>{underSubject}</p> : ''}
                    {leftInfo !== null ? <p className={'context-under text-regular--small '}>{leftInfo}</p> : ''}
                </div>
                <div className={rightInfo === null ? 'empty' : 'context__rightInfo'}>
                    <p className={`text-regular--small`}>{rightInfo}</p>
                </div>
            </div>
            </>


    }
}

export default Context;