import React, {Component} from 'react';

import './style.css';
import {generateUniqKey} from "../../../../helpers/helpers";

let daysData = [
    {
        'rus' : 'ПН',
        'eng' : 'monday'
    },
    {
        'rus' : 'ВТ',
        'eng' : 'tuesday'
    },
    {
        'rus' : 'СР',
        'eng' : 'wednesday'
    },
    {
        'rus' : 'ЧТ',
        'eng' : 'thursday'
    },
    {
        'rus' : 'ПТ',
        'eng' : 'friday'
    },
    {
        'rus' : 'СБ',
        'eng' : 'saturday'
    }
]

class RaspItemDays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monday: true,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false
        }
    }

    handleClick(day) {
        for (let key in this.state) {
            if (key === day) this.setState({[key] : true})
            else this.setState({[key]: false})
        }
    }

    getDayList() {
        let resArr = [];
        daysData.map((item, index) =>
            resArr.push(<div key={generateUniqKey('days', index)} onClick={() => this.handleClick(item.eng)} className={`DayItem DayItem_${this.state[item.eng] ? 'active' : 'unActive'}`}> {item.rus} </div>)
        )
        return resArr;
    }

    render() {
        return (
            <div className={'RaspItemDays'}>
                {this.getDayList()}
            </div>
        )
    }
}

export default RaspItemDays;

// return (
    // <div className={'RaspItemDays'}>
    //     <div onClick={() => this.handleClick('monday')} className={'DayItem'}>
    //         ПН
    //     </div>
    //     <div onClick={() => this.handleClick('tuesday')} className={'DayItem'}>
    //         ВТ
    //     </div>
    //     <div onClick={() => this.handleClick('wednesday')} className={'DayItem'}>
    //         СР
    //     </div>
    //     <div onClick={() => this.handleClick('thursday')} className={'DayItem'}>
    //         ЧТ
    //     </div>
    //     <div onClick={() => this.handleClick('friday')} className={'DayItem'}>
    //         ПТ
    //     </div>
    //     <div onClick={() => this.handleClick('saturday')} className={'DayItem'}>
    //         СБ
    //     </div>
    // </div>
// );