import React, {Component} from 'react';
import './style.css';
import Context from "./Context/Context";
import EmptyCard from "../EmptyCard/EmptyCard";

class Card extends Component {
    render() {
        const {pairtime, pair, weekIsOdd} = this.props.rasp;
        // если занятий нет
        if (!pair.length) {
            return <div className={'schedule-item schedule-item__Single'}>
                <EmptyCard/>
            </div>
        }
        // Для двойных занятиий
        if (this.props.isDouble) return (
            <div className={'schedule-item schedule-item__Double'}>
                <div className={'schedule-item__numerator'}>
                    <Context
                        opacity={!weekIsOdd}
                        timer={pairtime}
                        subject={pair[0].subject}
                        underSubject={pair[0].teacher}
                        leftInfo={!pair[0].subgroup ? null : `${pair[0].subgroup} Подгруппа`}
                        rightInfo={pair[0].aud}
                    />
                </div>
                <div className="splitter"></div>
                <div className={'schedule-item__denominator'}>
                    <Context
                        opacity={!!weekIsOdd}
                        subject={pair[1].subject}
                        underSubject={pair[1].teacher}
                        leftInfo={!pair[1].subgroup ? null : `${pair[1].subgroup} Подгруппа`}
                        rightInfo={pair[1].aud}
                    />
                </div>
            </div>
        )
        else return (
            <div className={'schedule-item schedule-item__Single'}>
                <Context
                    timer={pairtime}
                    subject={pair[0].subject}
                    underSubject={pair[0].teacher}
                    leftInfo={!pair[0].subgroup ? null : `${pair[0].subgroup} Подгруппа`}
                    rightInfo={pair[0].aud}
                />
            </div>
        )
    }
}

export default Card;