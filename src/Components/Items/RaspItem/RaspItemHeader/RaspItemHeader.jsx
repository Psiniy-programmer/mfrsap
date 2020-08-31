import React, {Component} from 'react';
import {connect} from "react-redux";
import star from './Icons/star.svg';
import starActive from './Icons/star_active.svg';

import './style.css';
import {translateFullGroupNameToRus} from "../../../../helpers/helpers";

class RaspItemHeader extends Component {
    // Получаем динамически нужный заголовок (Группу\Препода\Адуиторию)
    getHeaderTittle() {
        const { match } = this.props; // деструктурируем для удобства

        if ((match.params.rasp).match('auditoryid=')) return <>Auditory</> // code
        else if ((match.params.rasp).match('teacherid=')) return <>teacher</> // code
        else { // иначе переводим имя группы из ссылки на русский и выдаем
            return <>{ translateFullGroupNameToRus(match.params.rasp) }</>
        }
    }

    // Получаем Числитель\Знаменатель в зависимости от текущей учебной недели
    getHeaderWeek() {
        // code
        return <>Числитель</>
    }

    render() {
        return (
            <div className={'RaspItemHeader'}>
                <img className={'RaspItemHeader_Logo'} src={star} alt="error"/>
                <div className={'RaspItemHeader_Text'}>
                    <h1>{this.getHeaderTittle()}</h1>
                    <p className={'grayText'}>{this.getHeaderWeek()}</p>
                </div>
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
    return {}
}

export default connect(mapStateToProps, mapDispatchToState)(RaspItemHeader)