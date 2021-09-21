import React, {Component} from "react";
import EmptyCard from "../../EmptyCard/EmptyCard";
import {checkIsDouble, checkItem, checkOnArr, clearGroupName, getTimer,} from "../../../../../../helpers/helpers";
import Timer from "../../Timer/Timer";
import {connect} from "react-redux";
import "./style.css";
import DoubleContainer from "../Items/ItemContainer/DoubleContainer";
import DoubleInfo from "../Items/RaspItemInfo/DoubleInfo";
import SingleInfo from '../Items/RaspItemInfo/SingleInfo';
import SingleContainer from '../Items/ItemContainer/SingleContainer';

const TYPE = "teacher";

class Teacher extends Component {
    getContext(item, index, soon) {
        const arr = [];
        const temp = [];

        if (item.length === 0 || Object.keys(item[index]).length === 0) {
            return <EmptyCard soon={soon}/>;
        }

        const aud = checkItem(item[index].aud) ? (
            <p className="text-regular--small">{checkOnArr(item[index].aud)}</p>
        ) : (
            <p>----</p>
        );

        if (checkItem(item[index].subject)) {
            arr.push(
                <h4
                    key={item[index].subject}
                    className="teacher_pair__item_subject text-bold--large"
                >
                    {item[index].subject}
                </h4>
            );
        }

        if (checkItem(item[index].group)) {
            temp.push(
                <p
                    className="teacher_pair__item_group text-regular--small"
                    key={item[index].group}
                >
                    {clearGroupName(checkOnArr(item[index].group))}
                </p>
            );
        }

        if (checkItem(item[index].subgroup)) {
            temp.push(
                <p
                    className="teacher_pair__item_subgroup text-regular--small"
                    key={item[index].subgroup}
                >
                    подгруппы
                </p>
            );
        }

        arr.push(
            <div key={"temp"} className="teacher_item__main">
                {temp}
            </div>
        );

        return (
            <>
                <div className="rasp__item_main">{arr}</div>
                <div className="rasp__item_aud">{aud}</div>
            </>
        );
    }

    getSinglePair(item) {
        const {pair} = item;
        const {appTimer} = this.props;
        const diff = getTimer(item, appTimer);
        const opacity = appTimer.isOdd;
        const timer = (
            <Timer soon={diff.soon} diff={diff.diff} timer={diff.timer}/>
        );
        const res = this.getContext(pair, 0, diff.soon);

        return (
            <SingleContainer diff={diff}>
                {timer}
                <SingleInfo diff={diff} opacity={opacity}>
                    {res}
                </SingleInfo>
            </SingleContainer>
        );
    }

    getDoublePair(item, pairIndex) {
        const {pair} = item;
        const {appTimer} = this.props;
        const opacity = appTimer.isOdd;
        const diff = getTimer(item, appTimer);
        const timer = (
            <Timer soon={diff.soon} diff={diff.diff} timer={diff.timer}/>
        );

        if (!checkItem(pair[0])) {
            return (
                <EmptyCard index={pairIndex} soon={diff.soon}>
                    {timer}
                </EmptyCard>
            );
        }

        const num = this.getContext(pair, 0, diff.soon);
        const denum = this.getContext(pair, 1, diff.soon);

        return (
            <DoubleContainer key={item.pairnumber} item={item} diff={diff}>
                {timer}
                <div className="rasp__item_double">
                    <DoubleInfo type={TYPE} opacity={opacity}>
                        {num}
                    </DoubleInfo>
                    <div className="splitter"/>
                    <DoubleInfo type={TYPE} opacity={!opacity}>
                        {denum}
                    </DoubleInfo>
                </div>
            </DoubleContainer>
        );
    }

    getRasp() {
        const {pairList} = this.props;
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
        return <div className="rasp">{this.getRasp()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        appTimer: state.appTimer,
    };
};

export default connect(mapStateToProps)(Teacher);
