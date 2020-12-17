import React, {Component} from 'react';
import Timer from "../Timer/Timer";
import '../style.css'

class Double extends Component {
    isOpacity(opacity) {
        // const {opacity} = this.props;
        return opacity ? 'context_unactive' : 'context_active'
    }

    render() {
        const {
            opacity,
            data,
            info,
            timer
        } = this.props;

        return (
            <div className={'schedule-item schedule-item__Double'}>
                <Timer timer={timer}/>
                <div className={'schedule-item__numerator'}>
                    <div className={`context ${this.isOpacity(!opacity)} textColor`}>
                        <div className="context__leftInfo">
                            <h2 className={'context__subject text-bold--large '}>{data[0].subject}</h2>
                            {info[0].underSubject !== '' ?
                                <p className={'context__underSubject text-regular--small '}>
                                    {info[0].underSubject}
                                </p> : null}
                            {info[0].leftInfo !== null ?
                                <p className={'context-under text-regular--small '}>{info[0].leftInfo}</p> : null}
                        </div>
                        <div className={info[0].rightInfo === null ? 'empty' : 'context__rightInfo'}>
                            <p className={`text-regular--small`}>{info[0].rightInfo}</p>
                        </div>
                    </div>
                </div>
                <div className="splitter"/>
                <div className={'schedule-item__denominator'}>
                    <div className={`context ${this.isOpacity(!!opacity)} textColor`}>
                        <div className="context__leftInfo">
                            <h2 className={'context__subject text-bold--large '}>{data[1].subject}</h2>
                            {info[1].underSubject !== '' ?
                                <p className={'context__underSubject text-regular--small '}>
                                    {info[1].underSubject}
                                </p> : null}
                            {info[1].leftInfo !== null ?
                                <p className={'context-under text-regular--small '}>{info[1].leftInfo}</p> : null}
                        </div>
                        <div className={info[1].rightInfo === null ? 'empty' : 'context__rightInfo'}>
                            <p className={`text-regular--small`}>{info[1].rightInfo}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Double;