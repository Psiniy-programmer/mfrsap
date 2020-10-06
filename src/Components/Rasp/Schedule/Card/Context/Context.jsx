import React, {Component} from 'react';
import './style.css'

class Context extends Component {
    render() {
        const {timer, subject, underSubject, group, info} = this.props;
        return <>
            <p className={'context__timer'}>{timer}</p>
            <h2 className={'context__subject'}>{subject}</h2>
            <p className={'context__underSubject'}>{underSubject}</p>
            <p className={'context__group'}>{group}</p>
            <p className={'context__info'}>{info}</p>
        </>
    }
}

export default Context;