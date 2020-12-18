import React, {Component} from 'react';
import Timer from "../Timer/Timer";
import '../style.css'

class Single extends Component {
    isOpacity() {
        const {opacity} = this.props;
        return opacity ? 'context_unactive' : 'context_active'
    }

    render() {
        const {
            subject,
            underSubject,
            leftInfo,
            rightInfo,
            timer,
            isEmpty
        } = this.props;

        if (isEmpty) return <div className={'schedule-item schedule-item__Single'}>
            <Timer timer={timer}/>
            <div className="context context__leftInfo">
                <h2 className={'context__subject text-bold--large textColor'}>
                    Занятий нет
                </h2>
            </div>
        </div>
        else return <div className={'schedule-item schedule-item__Single'}>
            <Timer timer={timer}/>
            <div className={`context ${this.isOpacity()} textColor`}>
                <div className="context__leftInfo">
                    <h2 className={'context__subject text-bold--large '}>{subject}</h2>
                    {underSubject !== '' ?
                        <p className={'context__underSubject text-regular--small '}>
                            {underSubject}
                        </p> : null}
                    {leftInfo !== null ? <p className={'context-under text-regular--small '}>{leftInfo}</p> : ''}
                </div>
                <div className={rightInfo === null ? 'empty' : 'context__rightInfo'}>
                    <p className={`text-regular--small`}>{rightInfo}</p>
                </div>
            </div>
        </div>
    }
}

export default Single;