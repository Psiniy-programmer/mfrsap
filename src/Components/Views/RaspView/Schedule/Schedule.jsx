import React, {Component} from 'react';
import './style.css'
import {generateUniqKey} from "../../../../helpers/helpers";
import {connect} from "react-redux";
import Card from './Card/Card'
import MenuItem from "../../../MenuItem/MenuItem";

class Schedule extends Component {
    getCommonRasp(curDay, cardType) {
        let resList = [],
            isDouble = false;
        const {pairList} = curDay;
        // eslint-disable-next-line
        pairList.map((item, index) => {
            if (item.pair.length === 2) isDouble = true;
            // Если расписание пары двойное(по неделям), то выдаем
            resList.push(<Card
                key={generateUniqKey('Card_', index)}
                weekIsOdd={this.props.weekIsOdd}
                rasp={item}
                type={cardType}
                isDouble={isDouble}/>);
            isDouble = false;
        });
        return resList;
    }

    getRasp(curDay) {
        const {day} = this.props.raspData.data,
            cardType = Object.keys(this.props.raspData.data)[1];
        let isEmpty = true;
        if (!day[curDay].special_day) {
            // eslint-disable-next-line
            day[curDay].pairList.map(item => {
                if (item.pair.length !== 0) isEmpty = false;
            })
        } else return <MenuItem
            subclass={'text-bold--large RaspHeader-item'}
            text={'Занятия по особому расписанию'}/>
        return isEmpty ? <MenuItem
            subclass={'text-bold--large RaspHeader-item'}
            text={'Занятий нет'}/> : this.getCommonRasp(day[curDay], cardType);
    }

    render() {
        const {loading} = this.props.raspData;
        const {currentDayIndex} = this.props;
        if (loading === false) {
            return (
                <div className={'Schedule'}>
                    {this.getRasp(currentDayIndex)}
                </div>
            );
        }
        else return 'still loading'
    }
}

const mapStateToProps = state => {
    return {
        raspData: state.raspData,
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)