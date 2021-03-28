import React, {Component} from 'react';
import Timer from '../../Timer/Timer';
import {connect} from 'react-redux';
import EmptyCard from '../../EmptyCard/EmptyCard';
import {
  checkItem,
  getTimer,
  checkIsDouble,
} from '../../../../../../helpers/helpers';
import {checkOnArr} from '../../../../../../helpers/helpers';
import DoubleInfo from '../Items/RaspItemInfo/DoubleInfo';
import DoubleContainer from '../Items/ItemContainer/DoubleContainer';
import './style.css';
import SingleContainer from '../Items/ItemContainer/SingleContainer';
import SingleInfo from '../Items/RaspItemInfo/SingleInfo';

const TYPE = 'aud';

class Aud extends Component {
  getContext(item, index, soon) {
    const arr = [];
    const temp = [];

    if (item.length === 0 || Object.keys(item[index]).length === 0) {
      return <EmptyCard soon={soon}/>;
    }

    const group = checkItem(item[index].group) ? (
        <p className="text-regular--small">{checkOnArr(item[index].group)}</p>
    ) : (
        <p>----</p>
    );

    temp.push(group);

    if (checkItem(item[index].subject)) {
      arr.push(
          <h4
              key={item[index].subject}
              className="aud_pair__item_subject text-bold--large"
          >
            {item[index].subject}
          </h4>,
      );
    }

    if (checkItem(item[index].teacher)) {
      arr.push(
          <p
              className="aud_pair__item_teacher text-regular--small"
              key={item[index].teacher}
          >
            {item[index].teacher}
          </p>,
      );
    }

    if (checkItem(item[index].subgroup)) {
      temp.push(
          <p
              className="aud_pair__item_subgroup text-regular--small"
              key={item[index].subgroup}
          >
            {item[index].subgroup + ' подгруппа'}
          </p>,
      );
    }

    return (
        <>
          <div className="rasp__item_main">{arr}</div>
          <div className="aud_rasp__item_aud">{temp}</div>
        </>
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
    const diff = getTimer(item, appTimer);
    const opacity = appTimer.isOdd;
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
            <DoubleInfo type={TYPE} opacity={opacity}>{num}</DoubleInfo>
            <div className="splitter"/>
            <DoubleInfo type={TYPE} opacity={!opacity}>{denum}</DoubleInfo>
          </div>
        </DoubleContainer>
    );
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

export default connect(mapStateToProps)(Aud);
