import React, {Component} from 'react';
import './style.css';
import Context from "./Context/Context";
import EmptyCard from "../EmptyCard/EmptyCard";

class Card extends Component {
    render() {
        const {pairtime, pair, weekIsOdd} = this.props.rasp;
        const {type} = this.props;
        const info = [{},{}];

        if (!pair.length) {
            return <div className={'schedule-item schedule-item__Single'}>
                <EmptyCard/>
            </div>
        }

        switch (type) {
            case 'group' :
                for (let i = 0; i < pair.length; i++) {
                    info[i].underSubject = pair[i].teacher;
                    info[i].leftInfo = !pair[i].subgroup ? null : `${pair[i].subgroup} подгруппа`;
                    info[i].rightInfo = pair[i].aud;
                }
                break;
            case 'teacher' :
                for (let i = 0; i < pair.length; i++) {
                    info[i].underSubject = pair[i].group;
                    info[i].leftInfo = !pair[i].subgroup ? null : `${pair[i].subgroup} подгруппа`;
                    info[i].rightInfo = pair[i].aud;
                }
                break;
            case 'aud' :
                for (let i = 0; i < pair.length; i++) {
                    info[i].underSubject = pair[i].teacher;
                    info[i].leftInfo = pair[i].group;
                    info[i].rightInfo = !pair[i].subgroup ? null : `${pair[i].subgroup} подгруппа`;
                }
                break;
            default: break;
        }

        if (this.props.isDouble) return (
            <div className={'schedule-item schedule-item__Double'}>
                <div className={'schedule-item__numerator'}>
                    <Context
                        opacity={!weekIsOdd}
                        timer={pairtime}
                        subject={pair[0].subject}
                        underSubject={info[0].underSubject}
                        leftInfo={info[0].leftInfo}
                        rightInfo={info[0].rightInfo}
                    />
                </div>
                <div className="splitter"/>
                <div className={'schedule-item__denominator'}>
                    <Context
                        opacity={!!weekIsOdd}
                        subject={pair[1].subject}
                        underSubject={info[1].underSubject}
                        leftInfo={info[1].leftInfo}
                        rightInfo={info[1].rightInfo}
                    />
                </div>
            </div>
        )
        else return (
            <div className={'schedule-item schedule-item__Single'}>
                <Context
                    timer={pairtime}
                    subject={pair[0].subject}
                    underSubject={info[0].underSubject}
                    leftInfo={info[0].leftInfo}
                    rightInfo={info[0].rightInfo}
                />
            </div>
        )
    }
}

export default Card;