import React, {Component} from 'react';
import './style.css';
import {connect} from "react-redux";
import RaspHeader from "./RaspHeader/RaspHeader";
import DaysCarousel from "./DaysCarousel/DaysCarousel";
import {fetchRaspData} from "../../../actions/raspData";
import Schedule from "./Schedule/Schedule";
import {findRequestType} from "../../../helpers/helpers";
import AppHeader from "../../App/Header/AppHeader";
import Consts from "../../../helpers/consts"

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
            isOdd: true,
            type: {
                name: '',
                type: ''
            }
        }
        this.dayIndexUpdate = this.dayIndexUpdate.bind(this);
    }

    componentDidMount() {
        const {rasp} = this.props.match.params;

        this.weekIsOdd()
        const id = rasp.match(/\d+/g)[0];
        const type = findRequestType(rasp);
        this.setState({type: type})
        this.props.fetchRaspData(`https://mf.bmstu.ru/rasp/api/${type.name}?id=${id}`);
    }

    dayIndexUpdate(index) {
        return this.setState({currentDayIndex: index});
    }

    weekIsOdd() {
        let currentNumber = date.getDate(),
            currentMonth = date.getMonth(),
            countWeeks = 1; // 1 т.к начинаем с 1 недели
        while (currentNumber > 7 && currentMonth !== 8) {
            currentNumber -= 7;
            if (currentMonth > 8 && currentNumber < 7) {
                currentNumber += daysInYear[currentMonth];
                currentMonth--;
            }
            countWeeks++;
        }
        return countWeeks % 2 === 1 ? this.setState({isOdd: true}) : this.setState({isOdd: false});
    }

    getHeader() {
        const {windowSize} = this.props;
        if (windowSize.width > Consts.DESKTOP_MIN_WIDTH)
            return <AppHeader/>
    }


    render() {
        const {isOdd, type, currentDayIndex} = this.state;
        const {match} = this.props;
        return <div className={'RaspView'}>
            {this.getHeader()}
            <RaspHeader
                weekIsOdd={isOdd}
                match={match}
                type={type.name}
            />
            <DaysCarousel
                currentDayIndex={currentDayIndex}
                updateDays={this.dayIndexUpdate}
            />
            <Schedule
                weekIsOdd={isOdd}
                currentDayIndex={currentDayIndex}
                match={match}
                type={type.name}
            />
        </div>
    }
}

const mapStateToProps = state => {
    return {
        windowSize: state.windowSizes,
        raspData: state.raspData,
        groupsList: state.groupsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRaspData: url => {
            dispatch(fetchRaspData(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rasp)