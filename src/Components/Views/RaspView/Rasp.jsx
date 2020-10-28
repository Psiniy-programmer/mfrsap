import React, {Component} from 'react';
import './style.css';
import {connect} from "react-redux";
import Header from "./RaspHeader/RaspHeader";
import DaysCarousel from "./DaysCarousel/DaysCarousel";
import {fetchGroupRaspData} from "../../../actions/raspData";
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
            currentMonth = date.getMonth(),
            countWeeks = 1; // 1 т.к начинаем с 1 недели
        while (currentNumber > 7 || currentMonth !== 8) {
            currentNumber -= 7;
            if (currentMonth > 8 && currentNumber < 7) {
                currentNumber += daysInYear[currentMonth];
                currentMonth--;
            }
            countWeeks++;
        }
        return countWeeks % 2 === 1 ? this.setState({isOdd: true}) : this.setState({isOdd: false});
    }

    render() {
        return (
            <div className={'RaspView'}>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Rasp)