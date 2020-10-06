import React, {Component} from 'react';
import './style.css';
import {connect} from "react-redux";
import Header from "./Header/Header";
import DaysCarousel from "./DaysCarousel/DaysCarousel";
import {fetchGroupRaspData} from "../../actions/groupRaspData";
import {fetchTeacherRaspData} from "../../actions/teacherRaspData";
import {fetchAuditoryRaspData} from "../../actions/auditoryRaspData";
import Schedule from "./Schedule/Schedule";

const date = new Date();

class Rasp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDayIndex: date.getDay() - 1
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
            <div className={'Rasp'}>
                <Header match={this.props.match}/>
                <DaysCarousel currentDayIndex={this.state.currentDayIndex} updateDays={this.dayIndexUpdate}/>
                <Schedule currentDayIndex={this.state.currentDayIndex} match={this.props.match}/>
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

export default connect(mapStateToProps, mapDispatchToState)(Rasp)