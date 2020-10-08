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
const daysInYear = {
    0: 31, // Январь
    1: date.getFullYear() % 4 === 0 ? 29 : 28, // Февраль
    2: 31, // Март
    3: 30, // Апрель
    4: 31, // Май
    5: 30, // Июнь
    6: 31, // Июль
    7: 31, // Август
    8: 30, // Сентябрь
    9: 31, // Октябрь
    10: 30, // Ноябрь
    11: 31 // Декабрь
}

class Rasp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDayIndex: date.getDay() - 1,
            isOdd: true
        }
        this.dayIndexUpdate = this.dayIndexUpdate.bind(this);
    }

    dayIndexUpdate(index) {
        return this.setState({currentDayIndex: index});
    }

    componentDidMount() {
        this.weekIsOdd()
    }

    weekIsOdd() {
        let currentNumber = date.getDate(),
            currentMounth = date.getMonth(),
            countWeeks = 1; // 1 т.к начинаем с 1 недели
        while (currentNumber > 7 || currentMounth !== 8) {
            currentNumber -= 7;
            if (currentMounth > 8 && currentNumber < 7) {
                currentNumber += daysInYear[currentMounth];
                currentMounth--;
            }
            countWeeks++;
        }
        return countWeeks % 2 === 1 ? this.setState({isOdd: true}) : this.setState({isOdd: false});
    }

    render() {
        return (
            <div className={'Rasp'}>
                <Header
                    weekIsOdd={this.state.isOdd}
                    match={this.props.match}
                />
                <DaysCarousel
                    currentDayIndex={this.state.currentDayIndex}
                    updateDays={this.dayIndexUpdate}
                />
                <Schedule
                    weekIsOdd={this.state.isOdd}
                    currentDayIndex={this.state.currentDayIndex}
                    match={this.props.match}
                />
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