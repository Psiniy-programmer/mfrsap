import React, {Component} from 'react';

import './style.css'
import {fetchGroupRaspData} from "../../../../actions/groupRaspData";
import {fetchTeacherRaspData} from "../../../../actions/teacherRaspData";
import {fetchAuditoryRaspData} from "../../../../actions/auditoryRaspData";
import {connect} from "react-redux";
import RaspItemCard from "../RaspItemCard/RaspItemCard";

class RaspItemSchedule extends Component {
    componentDidMount() {
        const {match} = this.props;
        let id = match.params.rasp.match(/\d+/g)[0];
        this.props.fetchGroupRasp(`https://mf.bmstu.ru/rasp/test/?type=1&groupid=${id}`)
    }
    getCommonRasp() {
        const {day} = this.props.raspData;
        day.map(item => {
            
        });
        return <RaspItemCard time={'8:40'}/>
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
        return isEmpty ? <>Занятий нет</> : this.getCommonRasp();
    }
    returnRasp() {
        // Проверяем загрузились ли данные
        if (Object.keys(this.props.raspData).length !== 0) {
            return this.getRasp(this.props.currentDayIndex);
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className={'RaspItemSchedule'}>
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

export default connect(mapStateToProps, mapDispatchToState)(RaspItemSchedule)