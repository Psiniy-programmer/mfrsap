import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {changeLangEngToRus, findFacultyName} from '../../helpers/helpers.js'

class SearchPage extends Component {
    // Динамичное подставление нужной инфы
    dynamic() {
        const { match } = this.props; // деструктурируем для удобства
        // Генерим описания к шапке
        if (match !== undefined) {
            switch(match.path) {
                case '/:faculty' : {
                    return findFacultyName(match.url);
                }
                case '/:faculty/:department' : {
                    return 'Кафедра ' + changeLangEngToRus(match.params.department);
                }
                case '/:faculty/:department/:course' : {
                    return `Кафедра ${changeLangEngToRus(match.params.department)} - ${match.params.course} курс`;
                }
                default : break;
            }
        } else return <>Начните вводить группу, преподователя или аудиторию</>
    }

    render() {
        return (
            <div className={'SearchPage'}>
                <h1 className={'SearchTittle'}>Рассписание МФ МГТУ</h1>
                <p className={'SearchDescription'}>
                    {this.dynamic()}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);