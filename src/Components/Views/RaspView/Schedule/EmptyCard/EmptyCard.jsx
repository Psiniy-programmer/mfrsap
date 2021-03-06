import React, {Component} from 'react';
import clock_icon from '../Card/Context/Timer/icons/clock-icon.svg';
import {getTime} from "../../../../../helpers/helpData";
import './style.css'

class EmptyCard extends Component {
    render() {
        return (
            <div className={'emptyCard textColor'}>
                <div className="emptyCard__timer text-regular--small">
                    <img className={'timer__img'} src={clock_icon} alt="timer"/>
                    <p className={'timer__text'}>{getTime(this.props.index)}</p>
                </div>
                <p className="emptyCard__text text-bold--large">
                    Занятия нет
                </p>
            </div>
        );
    }
}

export default EmptyCard;