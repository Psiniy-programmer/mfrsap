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

    getRasp(curday) {
        const {day} = this.props.raspData.data;
        let isEmpty = true;
        if (!day[curday].special_day) {
            day[curday].pairList.map(item => {
                if (item.pair.length !== 0) isEmpty = false;
            })
        } else return <>Special</>
        return isEmpty ? <>Занятий нет</> : this.getCommonRasp();
    }
    getCommonRasp() {
        return <RaspItemCard time={'8:40'}/>
    }

    returnRasp() {
        // Проверяем загрузились ли данные
        if (Object.keys(this.props.raspData).length !== 0) {
            let curDay = 1;
            return this.getRasp(curDay);
        }
    }

    render() {
        // console.log(typeof (this.props.raspData.day))
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