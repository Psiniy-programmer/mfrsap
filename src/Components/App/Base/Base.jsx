import React, {Component} from 'react';
import './style.css'
import {changeLangEngToRus, finderIsEmpty, findFacultyName} from "../../../helpers/helpers";
import {connect} from 'react-redux';
import SearchInput from "../../SearchInput/SearchInput";
import SearchResult from "../../Views/SearchView/SearchResult/SearchResult";

class Base extends Component {
    // Динамичное подставление нужного описания (текст под заголовком)
    dynamicDescription() {
        const {match} = this.props; // деструктурируем для удобства
        // Генерим описания к шапке
        switch (match.path) {
            case '/search/:faculty' :
                return findFacultyName(match.params.faculty);
            case '/search/:faculty/:department' :
                return 'Кафедра ' + changeLangEngToRus(match.params.department);
            case '/search/:faculty/:department/:course' :
                return `Кафедра ${changeLangEngToRus(match.params.department)} - ${match.params.course} курс`;
            case '/settings' :
                return 'Настройки'
            case '/favorites' :
                return 'Избранное'
            default :
                break;
        }
    }

    getDescription() {
        const {match, findInput} = this.props;
        if (match.path !== '/settings' && match.path !== '/favorites') {
            return <>
                {this.getSearch()}
                <div className={`SearchDescription ${finderIsEmpty(findInput) ? 'SearchDescription__hide' : null}`}>
                    <p className={'SearchDescription__text  text-medium--small '}>
                        {this.dynamicDescription()}
                    </p>
                    <p onClick={() => window.history.back()}
                       className={'SearchDescription__backtrace text-regular--medium'}>
                        {'< Назад'}
                    </p>
                </div>
            </>
        }
    }

    getSearch() {
        return <>
            <p className={'SearchHelper text-medium--small'}>
                Начните вводить группу, преподавателя или аудиторию
            </p>
            <SearchInput/>
        </>
    }

    getTittle() {
        const {match} = this.props;
        switch (match.path) {
            case '/settings':
                return 'Настройки'
            case '/favorites':
                return 'Избранное'
            default:
                return 'Поиск'
        }
    }

    getSearchResult() {
        if (this.props.findInput.length > 0) return <SearchResult/>

    }


    render() {
        return (
            <div className={'Base textColor'}>
                <h2 className={'TittleType'}>{this.getTittle()}</h2>
                {this.props.match.path !== '/' ? this.getDescription() : this.getSearch()}
                {this.getSearchResult()}
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
        auditoryList: state.auditoryList,
        findInput: state.filterItems
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Base);