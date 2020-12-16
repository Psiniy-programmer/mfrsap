import React, {Component} from 'react';
import clock_icon from './icons/clock-icon.svg';
import {connect} from "react-redux";
import './style.css'

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
                    {underSubject !== '' ?
                        <p className={'context__underSubject text-regular--small '}>{underSubject}</p> : ''}
                    {leftInfo !== null ? <p className={'context-under text-regular--small '}>{leftInfo}</p> : ''}
                </div>
                <div className={rightInfo === null ? 'empty' : 'context__rightInfo'}>
                    <p className={`text-regular--small`}>{rightInfo}</p>
                </div>
            </div>
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Context)