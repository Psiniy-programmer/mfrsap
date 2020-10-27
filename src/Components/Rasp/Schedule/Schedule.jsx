import React, {Component} from 'react';
import './style.css'
import {fetchGroupRaspData} from "../../../actions/raspData";
import {generateUniqKey} from "../../../helpers/helpers";
import {connect} from "react-redux";
import Card from './Card/Card'
import SearchItem from "../../SearchPage/SearchItem/SearchItem";

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
        // eslint-disable-next-line
        pairList.map((item, index) => {
            if (item.pair.length === 2) isDouble = true;
            // Если расписание пары двойное(по неделям), то выдаем
            resList.push(<Card key={generateUniqKey('Card_', index)} weekIsOdd={this.props.weekIsOdd} rasp={item} isDouble={isDouble}/>);
            isDouble = false;
        });
        return resList;
    }

    getRasp(curDay) {
        const {day} = this.props.raspData.data;
        let isEmpty = true;
        if (!day[curDay].special_day) {
            // eslint-disable-next-line
            day[curDay].pairList.map(item => {
                if (item.pair.length !== 0) isEmpty = false;
            })
        } else return <SearchItem subclass={'text-bold--large Header-item'} text={'Занятия по особому расписанию'}/>
        return isEmpty ? <SearchItem subclass={'text-bold--large Header-item'} text={'Занятий нет'}/> : this.getCommonRasp(day[curDay]);
    }

    returnRasp() {
        // Проверяем загрузились ли данные
        const {raspData, currentDayIndex} = this.props;
        if (raspData.loading === false) {
            return this.getRasp(currentDayIndex);
        }
    }

    render() {
        return (
            <div className={'Schedule'}>
                {this.returnRasp()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        raspData: state.raspData,
    }
}

const mapDispatchToState = dispatch => {
    return {
        fetchGroupRasp: url => {
            dispatch(fetchGroupRaspData(url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Schedule)