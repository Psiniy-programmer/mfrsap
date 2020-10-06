import React, {Component} from 'react';

import './style.css'
import {fetchGroupRaspData} from "../../../../actions/groupRaspData";
import {fetchTeacherRaspData} from "../../../../actions/teacherRaspData";
import {fetchAuditoryRaspData} from "../../../../actions/auditoryRaspData";
import {connect} from "react-redux";
import Card from './Card/Card'

const test = [];

class Schedule extends Component {
    componentDidMount() {
        const {match} = this.props;
        let id = match.params.rasp.match(/\d+/g)[0];
        this.props.fetchGroupRasp(`https://mf.bmstu.ru/rasp/test/?type=1&groupid=${id}`);

    }
    getCommonRasp(curDay) {
        let resList = [];
        let isDouble = false;
        const {pairList} = curDay;
        console.log(curDay)
        pairList.map(item => {
            if (item.pair.length === 2) isDouble = true;
            // Если расписание пары двойное(по неделям), то выдаем
            resList.push(<Card rasp={pairList} isDouble={isDouble}/>);
            console.log(item);
            isDouble = false;
        });
        return resList;
    }
    getRasp(curDay) {
        const {day} = this.props.raspData;
        let isEmpty = true;
        if (!day[curDay].special_day) {
            // eslint-disable-next-line
            day[curDay].pairList.map(item => {
                if (item.pair.length !== 0) isEmpty = false;
            })
        } else return <>Special</>
        return isEmpty ? <>Занятий нет</> : this.getCommonRasp(day[curDay]);
    }
    returnRasp() {
        // Проверяем загрузились ли данные
        const {raspData, currentDayIndex} = this.props;
        if (Object.keys(raspData).length !== 0) {
            return this.getRasp(currentDayIndex);
        }
    }
    render() {
        console.log(this.props.raspData)
        return (
            <div className={'Schedule'}>
                {this.returnRasp()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        groupsList: state.groupsList,
        raspData: state.raspData
    }
}

const mapDispatchToState = dispatch => {
    return {
        fetchGroupRasp: url => {
            dispatch(fetchGroupRaspData(url))
        },
        fetchTeacherRasp: url => {
            dispatch(fetchTeacherRaspData(url))
        },
        fetchAuditoryRasp: url => {
            dispatch(fetchAuditoryRaspData(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Schedule)