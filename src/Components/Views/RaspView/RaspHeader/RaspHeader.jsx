import React, {Component} from 'react';
import {connect} from "react-redux";
import star from './Icons/star.svg';
import star_active from './Icons/star_active.svg';
import './style.css';
import {addToFavorite, removeFromFavorite} from '../../../../actions/favoriteStorage.js';

const localStorage = window.localStorage;
class RaspHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFavorite: localStorage.getItem(this.props.match.params.rasp) !== null
        }
    }

    getHeaderTittle() {
        const { match, groupsList } = this.props; // деструктурируем для удобства
        let id = Number(match.params.rasp.match(/\d+/g)[0]);
        let resultStr = '';
        if ((match.params.rasp).match('auditoryid=')) return <>Auditory</> // code
        else if ((match.params.rasp).match('teacherid=')) return <>teacher</> // code
        else { // иначе переводим имя группы из ссылки на русский и выдаем
            groupsList.data.forEach(item => {
                if (item.groupid === id) resultStr = <>{item.groupname}</>;
            })
        }
        return resultStr;
    }

    getHeaderWeek() {
        return this.props.weekIsOdd ? <>Числитель</> : <>Знаменатель</>
    }

    toggleFavorites() {
        const {data} = this.props.raspData;
        const currentRaspType = Object.keys(data)[1];
        const objInfo = {
            type: currentRaspType,
            name: data[currentRaspType]
        };
        let local = localStorage.getItem(objInfo.name),
            checkFavorite = local === null;
        console.error(checkFavorite, local)
        checkFavorite ? this.props.addToFavorite(objInfo) : this.props.removeFromFavorite(objInfo);
        this.setState({isFavorite: checkFavorite});
    }

    render() {
        console.log(this.props.raspData)
        return (
            <div className={'RaspHeader textColor'}>
                <img
                    onClick={() => this.toggleFavorites()}
                    className={'Header_Logo'}
                    src={this.state.isFavorite ? star_active : star}
                    alt="error"
                />
                <div className={'Header_Text'}>
                    <h1 className={'shift-text text-bold--large'}>{this.getHeaderTittle()}</h1>
                    <p className={'text-regular--medium'}>{this.getHeaderWeek()}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        raspData: state.raspData,
        groupsList: state.groupsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavorite: item => {
            dispatch(addToFavorite(item))
        },
        removeFromFavorite: item => {
            dispatch(removeFromFavorite(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaspHeader)