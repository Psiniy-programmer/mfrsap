import React, {Component} from 'react';
import './style.css';
import Context from "./Context/Context";

class Card extends Component {
    render() {
        if (this.props.isDouble) return (
            <div className={'schedule-item schedule-item__Double'}>
                <div className={'schedule-item__numerator'}>
                    <Context timer={'8:40'} subject={'kek'} underSubject={'under'} group={'group'} info={'438'}/>
                </div>
                <div className="splitter">------------------------------</div>
                <div className={'schedule-item__denominator'}>
                    <Context timer={'8:40'} subject={'kek'} underSubject={'under'} group={'group'} info={'438'}/>
                </div>
            </div>
        )
        else return (
            <div className={'schedule-item schedule-item__Single'}>
                <Context timer={'8:40'} subject={'kek'} underSubject={'under'} group={'group'} info={'438'}/>
            </div>
        )
    }
}

export default Card;