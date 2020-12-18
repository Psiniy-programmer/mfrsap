import React, {Component} from 'react';
import {generateUniqKey} from "../../../../helpers/helpers";
import {connect} from "react-redux";
import Card from './Card/Card'
import './style.css'

class Schedule extends Component {
    getCommonRasp(curDay) {
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
                type={this.props.type}
                isDouble={isDouble}
                index={index}
            />);
            isDouble = false;
        });
        return resList;
    }

    getRasp(curDay) {
        const {day} = this.props.raspData.data;
        let isEmpty = true;
        if (!day[curDay].special_day) {
            // eslint-disable-next-line
            day[curDay].pairList.map(item => {
                if (item.pair.length !== 0) isEmpty = false;
            })
        } else return <p className={'textColor text-bold--large'}>Занятия по особому расписанию</p>
        return isEmpty ?
            <p className={'textColor text-bold--large'}>Занятий нет</p> : this.getCommonRasp(day[curDay]);
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
        else return <div/>
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