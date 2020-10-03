import React, {Component} from 'react';
import {connect} from "react-redux";
import RaspItemHeader from "./RaspItemHeader/RaspItemHeader";
import './style.css';
import RaspItemDays from "./RaspItemDays/RaspItemDays";
import {fetchGroupRaspData} from "../../../actions/groupRaspData";
import {fetchTeacherRaspData} from "../../../actions/teacherRaspData";
import {fetchAuditoryRaspData} from "../../../actions/auditoryRaspData";
import RaspItemSchedule from "./RaspItemSchedule/RaspItemSchedule";

class RaspItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDayIndex: 0
        }
        this.dayIndexUpdate = this.dayIndexUpdate.bind(this);
    }

    dayIndexUpdate(index) {
        return this.setState({currentDayIndex: index});
    }

    componentDidMount() {
        // Реализовать подцепление расписания для нужного типа распасания
    }

    render() {
        return (
            <div className={'RaspItem'}>
                <RaspItemHeader match={this.props.match}/>
                <RaspItemDays updateDays={this.dayIndexUpdate}/>
                <RaspItemSchedule currentDayIndex={this.state.currentDayIndex} match={this.props.match}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        groupsList: state.groupsList
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

export default connect(mapStateToProps, mapDispatchToState)(RaspItem)