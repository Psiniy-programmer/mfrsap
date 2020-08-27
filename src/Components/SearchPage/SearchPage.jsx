import React, {Component} from 'react';
import './style.css';
import {connect} from "react-redux";

class SearchPage extends Component {
    // переводим язык из адресной строки
    changeLang(word) {
        let str;
        switch (word[0].toLowerCase()) {
            case 'k' : str = 'К'; break;
            case 'l' : str = 'ЛТ'; break;
            case 'a' : str = 'Аспирантура'; break;
            default : break;
        }
        return str;
    }

    // Динамичное подставление нужной инфы
    dynamic() {
        const { match } = this.props; // деструктурируем для удобства
        // подставление для инфы
        if (match !== undefined) {
            console.log(match.url)
            return this.changeLang(match.params.department)
        } else return <></>
    }

    render() {
        return (
            <div className={'SearchPage'}>
                <h1 className={'SearchTittle'}>Рассписание МФ МГТУ</h1>
                <p className={'SearchDescription'}>
                    {/*{this.props.description}*/}
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