import React, {Component} from 'react';
import {connect} from 'react-redux';
import RaspItem from '../../../RaspItem/RaspItem';
import './style.css';
import Aud from './Types/Aud/Aud';
import Group from './Types/Group/Group';
import Teacher from './Types/Teacher/Teacher';
import {desktopCarouselData} from "../../../../helpers/helpData";

class Schedule extends Component {
    getCommonRasp(curDay) {
        const {pairList} = curDay;
        const {type} = this.props;

        switch (type) {
            case 'group':
                return <Group pairList={pairList}/>;
            case 'teacher':
                return <Teacher pairList={pairList}/>;
            case 'aud':
                return <Aud pairList={pairList}/>;
            default:
                break;
        }
    }

    /**
     * @param tableIndex - индекс дня, который нам нужен
     * @returns {JSX.Element|*} - Таблица(ы) с расписанием
     */
    getTable(tableIndex) {
        let isEmpty = true;
        const {day} = this.props.raspData.data;

        // Получаем ОДИН день, если он существует
        if (day !== undefined && !day[tableIndex].special_day) {
            day[tableIndex].pairList.map((item) => {
                if (item.pair.length !== 0) {
                    isEmpty = false
                }
                return null;
            });
        } else return <RaspItem text="Занятия по особому расписанию"/>;

        return isEmpty ? (
            <RaspItem text="Занятий нет"/>
        ) : (
            this.getCommonRasp(day[tableIndex])
        );
    }

    /**
     * @returns {JSX.Element|*} - Таблица(ы) с расписанием
     */
    getRasp() {
        const {dayIndex, isMobile} = this.props.appTimer;
        const {day} = this.props.raspData.data;

        // Если получаем всё расписание
        if (dayIndex === null && !isMobile && day) {
            let tables = [];

            for (let i = 0; i < day.length; i++) {
                tables.push(
                    <div>
                        <h3>{day[i].name}</h3>
                        {this.getTable(i)}
                    </div>
                );
            }

            return <div className='everyDayTables'>
                {
                    tables.map((dayTable) => dayTable)
                }
            </div>
        }

        // Если получаем один из дней
        return this.getTable(dayIndex);
    }

    render() {
        const {loading} = this.props.raspData;

        return <>
            {
                !loading && <div className={'Schedule'}>{this.getRasp()}</div>
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        appTimer: state.appTimer,
        raspData: state.raspData,
    };
};

export default connect(mapStateToProps)(Schedule);
