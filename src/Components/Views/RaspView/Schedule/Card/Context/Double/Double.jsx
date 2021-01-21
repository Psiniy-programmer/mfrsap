import React, {Component} from 'react';
import Timer from "../Timer/Timer";
import '../style.css'
import EmptyCard from "../../../EmptyCard/EmptyCard";

class Double extends Component {
    isOpacity(opacity) {
        return opacity ? 'context_unactive' : 'context_active'
    }

    getRasp(info, data, opacity) {
        return <>
            <div className={`context ${this.isOpacity(!opacity)} textColor`}>
                <div className="context__leftInfo">
                    <h2 className={'context__subject text-bold--large '}>{data.subject}</h2>
                    {info.underSubject !== '' ?
                        <p className={'context__underSubject text-regular--small '}>
                            {info.underSubject}
                        </p> : null}
                    {info.leftInfo !== null ?
                        <p className={'context-under text-regular--small '}>{info.leftInfo}</p> : null}
                </div>
                <div className={info === null ? 'empty' : 'context__rightInfo'}>
                    <p className={`text-regular--small`}>{info.rightInfo}</p>
                </div>
            </div>
        </>
    }

    getEmpty(opacity) {
        return <p className={`text-bold--large textColor ${this.isOpacity(!opacity)}`}>Занятия нет</p>
    }

    // checkRasp(info) {
    //     if (Object.keys(info[1]).length === 0) {
    //
    //     }
    // }

    render() {
        const {
            opacity,
            data,
            info,
            timer,
        } = this.props;
        // if (Object.keys(info[1]).length === 0 && info[1].constructor === Object)
        return (
            <div className={'schedule-item schedule-item__Double'}>
                <Timer timer={timer}/>
                <div className="Double__info">
                    <div className={'schedule-item__numerator'}>
                        {info[0].week === 1 ? this.getRasp(info[0], data[0], !opacity) : this.getEmpty(opacity)}
                    </div>
                    <div className="splitter"/>
                    <div className={'schedule-item__denominator'}>
                        {console.log(info)}
                        {/*{console.log(info[1])}*/}
                        {console.log(Object.keys(info[1]).length !== 0)}
                        {Object.keys(info[1]).length === 0
                            ? this.getRasp(info[0], data[0], opacity) : this.getEmpty(opacity)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Double;