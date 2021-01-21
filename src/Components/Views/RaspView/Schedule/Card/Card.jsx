import React, {Component} from 'react';
import './style.css';
import Single from "./Context/Single/Single";
import Double from "./Context/Double/Double";

class Card extends Component {
    render() {
        const {pairtime, pair, weekIsOdd} = this.props.rasp;
        const {type} = this.props;
        const info = [{}, {}];

        if (!pair.length) {
            return <Single isEmpty={true} timer={pairtime}/>
        }
        switch (type) {
            case 'group' :
                for (let i = 0; i < pair.length; i++) {
                    info[i].underSubject = pair[i].teacher;
                    info[i].leftInfo = !pair[i].subgroup ? null : `${pair[i].subgroup} подгруппа`;
                    info[i].rightInfo = pair[i].aud;
                    info[i].week = pair[i].week;
                }
                break;
            case 'teacher' :
                for (let i = 0; i < pair.length; i++) {
                    info[i].underSubject = pair[i].group;
                    info[i].leftInfo = !pair[i].subgroup ? null : `${pair[i].subgroup} подгруппа`;
                    info[i].rightInfo = pair[i].aud;
                    info[i].week = pair[i].week;
                }
                break;
            case 'aud' :
                for (let i = 0; i < pair.length; i++) {
                    info[i].underSubject = pair[i].teacher;
                    info[i].leftInfo = pair[i].group;
                    info[i].rightInfo = !pair[i].subgroup ? null : `${pair[i].subgroup} подгруппа`;
                    info[i].week = pair[i].week;
                }
                break;
            default:
                break;
        }

        return this.props.isDouble ? <Double
            data={pair}
            info={info}
            opacity={weekIsOdd}
            timer={pairtime}
        /> : <Single
            timer={pairtime}
            opacity={!!weekIsOdd}
            subject={pair[0].subject}
            underSubject={info[0].underSubject}
            leftInfo={info[0].leftInfo}
            rightInfo={info[0].rightInfo}
        />
    }
}

export default Card;