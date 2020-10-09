import React, {Component} from 'react';
import {connect} from "react-redux";
import star from './Icons/star.svg';
import star_active from './Icons/star_active.svg'
import './style.css';

const localStorage = window.localStorage;
// localStorage.clear();
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFavorite: false
        }
    }

    // Получаем динамически нужный заголовок (Группу\Препода\Адуиторию)
    getHeaderTittle() {
        const { match } = this.props; // деструктурируем для удобства
        let id = Number(match.params.rasp.match(/\d+/g)[0]);
        let resultStr = '';
        if ((match.params.rasp).match('auditoryid=')) return <>Auditory</> // code
        else if ((match.params.rasp).match('teacherid=')) return <>teacher</> // code
        else { // иначе переводим имя группы из ссылки на русский и выдаем
            this.props.groupsList.forEach(item => {
                if (item.groupid === id) resultStr = <>{item.groupname}</>;
            })
        }
        return resultStr;
    }

    // Получаем Числитель\Знаменатель в зависимости от текущей учебной недели
    getHeaderWeek() {
        return this.props.weekIsOdd ? <>Числитель</> : <>Знаменатель</>
    }

    componentDidMount() {
        
    }

    addRemoveToFavorites() {
        let string = this.getHeaderTittle()
        if (string.props !== undefined) {
            if (localStorage.getItem(string.props.children) !== null)
                localStorage.removeItem(string.props.children)
            else
                localStorage.setItem(string.props.children, '1');
        }
        this.setState({'1':1})
    }

    render() {
        return (
            <div className={'Header'}>
                <img
                    onClick={() => this.addRemoveToFavorites()}
                    className={'Header_Logo'}
                    src={star}
                    alt="error"
                />
                <div className={'Header_Text'}>
                    <h1 className={'shift-text'}>{this.getHeaderTittle()}</h1>
                    <p className={'text-regular--medium'}>{this.getHeaderWeek()}</p>
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

export default connect(mapStateToProps, mapDispatchToState)(Header)