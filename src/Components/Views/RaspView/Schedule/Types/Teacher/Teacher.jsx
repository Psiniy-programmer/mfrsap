import React, {Component} from 'react';
import EmptyCard from "../../EmptyCard/EmptyCard";
import {checkIsDouble, checkItem, getTimer} from "../../../../../../helpers/helpers";
import Timer from "../../Card/Context/Timer/Timer";
import {connect} from 'react-redux';
import './style.modules.css';

class Teacher extends Component {
    getContext(item, index) {
        const arr = [];
        const temp = [];
        console.log(item)

        if (item.length === 0 || Object.keys(item[index]).length === 0) {
            return <EmptyCard/>
        }

        const aud = checkItem(item[index].aud) ? (
            <p className="text-regular--small">{item[index].aud}</p>
        ) : (
            <p>----</p>
        );

        if (checkItem(item[index].subject)) {
            arr.push(
                <h4
                    key={item[index].subject}
                    className="pair__item_subject text-bold--large"
                >
                    {item[index].subject}
                </h4>
            );
        }

        if (checkItem(item[index].group)) {
            temp.push(
                <p
                    className="pair__item_teacher text-regular--small"
                    key={item[index].group}
                >
                    {item[index].group}
                </p>
            );
        }

        if (checkItem(item[index].subgroup)) {
            temp.push(
                <p
                    className="pair__item_subgroup text-regular--small"
                    key={item[index].subgroup}
                >
                    {item[index].subgroup + " подгруппа"}
                </p>
            );
        }

        arr.push(<div key={'temp'} className="item__main">{temp}</div>);

        return (
            <>
                <div className="rasp__item_main">{arr}</div>
                <div className="rasp__item_aud">{aud}</div>
            </>
        );
    }

    getSinglePair(item) {
        const { pair } = item;
        const diff = getTimer(item, this.props.appTimer.date);
        const timer = (
            <Timer soon={diff.soon} diff={diff.diff} timer={diff.timer} />
        );
        const res = this.getContext(pair, 0);

        return (
            <div key={diff.timer} className={`rasp__item ${diff.soon ? "soon" : ""}`}>
                {timer}
                <div className={`rasp__item_info ${diff.soon ? 'soon' : 'scheduleColor'}`}>{res}</div>
            </div>
        );
    }

    getDoublePair(item, pairIndex) {
        const { pair } = item;
        const diff = getTimer(item, this.props.appTimer.date);
        const timer = (
            <Timer soon={diff.soon} diff={diff.diff} timer={diff.timer} />
        );

        if (!checkItem(pair[0])) {
            return <EmptyCard index={pairIndex}>{timer}</EmptyCard>;
        }

        const num = this.getContext(pair, 0);
        const denum = this.getContext(pair, 1);

        return (
            <div key={item.pairnumber} className={`rasp__item scheduleColor `}>
                {timer}
                <div className="rasp__item_double">
                    <div className="rasp__item_info">{num}</div>
                    <div className="splitter" />
                    <div className="rasp__item_info">{denum}</div>
                </div>
            </div>
        );
    }

    getRasp() {
        const { pairList } = this.props;
        const res = [];

        pairList.forEach((item) => {
            if (checkIsDouble(item)) {
                return res.push(this.getDoublePair(item));
            } else {
                return res.push(this.getSinglePair(item));
            }
        });
        return res;
    }

    render() {
        return (
            <div className='rasp'>
                {this.getRasp()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appTimer: state.appTimer,
    };
};

export default connect(mapStateToProps)(Teacher);
