import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {
    changeLangEngToRus,
    findFacultyName,
    translateFullGroupNameToRus
} from '../../helpers/helpers.js'

class AppHeader extends Component {
    // Динамичное подставление нужного описания (текст под заголовком)
    dynamicDescription() {
        const { match } = this.props; // деструктурируем для удобства
        // Генерим описания к шапке
        switch (match.path) {
            case '/' :
                return <>Начните вводить группу, преподавателя или аудиторию</>
            case '/:faculty' :
                return findFacultyName(match.url);
            case '/:faculty/:department' :
                return 'Кафедра ' + changeLangEngToRus(match.params.department);
            case '/:faculty/:department/:course' :
                return `Кафедра ${changeLangEngToRus(match.params.department)} - ${match.params.course} курс`;
            case '/settings' :
                return 'Настройки'
            case '/favorites' :
                return 'Избранное'
            default :
                break;
        }
    }

    dynamicHeader() {
        const { match } = this.props;
        // Если мы находимся в состоянии щелканья кнопок и не добрались до расписания группы то заголовок стандартный
        if (match.path !== '/:faculty/:department/:course/:rasp') return <>Расписание МФ МГТУ</>
        else { // Если в адресе расписания есть эти ключевые слова то возвращаем соотв. заголовоки (имя препода\номер аудитории)
            if ((match.params.rasp).match('auditoryid=')) return <>Auditory</>
            else if ((match.params.rasp).match('teacherid=')) return <>teacher</>
            else { // иначе переводим имя группы из ссылки на русский и выдаем
                return <>{ translateFullGroupNameToRus(match.params.rasp) }</>
            }
        }
    }

    render() {
        return (
            <div className={'AppHeader'}>
                <h1 className={'SearchTittle text-bold--large'}>
                    Расписание МФ МГТУ
                </h1>
                <p className={'SearchDescription grayText'}>
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