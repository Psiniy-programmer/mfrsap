import React, {Component} from 'react';
import './style.css';

class Card extends Component {
    render() {
        if (this.props.isDouble) return (
            <div className={'schedule-item schedule-item__Double'}>
                <div className={'schedule-item__numerator'}>
                    <div className="schedule-item__tittle">
                        <p className={"schedule-item__timer"}>timer</p>
                        <h3>tittle Test</h3>
                    </div>
                </div>
                <div className={'schedule-item__denominator'}>
                    <div className="schedule-item__tittle">
                        <p className={"schedule-item__timer"}>timer</p>
                        <h3>tittle text</h3>
                    </div>
                </div>
            </div>
        )
        else return (
            <div className={'schedule-item schedule-item__Single'}>
                <div className="schedule-item__tittle">
                    <p className={"schedule-item__timer"}>timer</p>
                    <h3>tittle text</h3>
                </div>
            </div>
        )
    }
}

export default Card;