import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {
    changeLangEngToRus,
    findFacultyName,
} from '../../../helpers/helpers.js';
import bmstu_logo from './icons/bmstu-logo.svg';

class AppHeader extends Component {
    // Динамичное подставление нужного описания (текст под заголовком)
    dynamicDescription() {
        const { match } = this.props; // деструктурируем для удобства
        // Генерим описания к шапке
        switch (match.path) {
            case '/' :
                return <>Начните вводить группу, преподавателя или аудиторию</>
            case '/search/:faculty' :
                return findFacultyName(match.params.faculty);
            case '/search/:faculty/:department' :
                return 'Кафедра ' + changeLangEngToRus(match.params.department);
            case '/search/:faculty/:department/:course' :
                return `Кафедра ${changeLangEngToRus(match.params.department)} - ${match.params.course} курс`;
            case '/search/settings' :
                return 'Настройки'
            case '/search/favorites' :
                return 'Избранное'
            default :
                break;
        }
    }

    render() {
        return (
            <div className={'AppHeader textColor'}>
                <div className={'SearchTittle'}>
                    <img src={bmstu_logo} alt="error"/>
                    <h1 className={'text-bold--header text-bold--large '}>Расписание МФ МГТУ</h1>
                </div>
                <h2 className={'TittleType'}>Поиск</h2>
                <p className={'SearchDescription  text-medium--small '}>
                    {this.dynamicDescription()}
                </p>
            </div>
        );
    }
}

const mapDispatchToProps = () => {
    return {}
}

const mapStateToProps = state => {
    return {
        groupsList: state.groupsList,
        facultyList: state.facultyList,
        teachersList: state.teachersList,
        auditoryList: state.auditoryList
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);