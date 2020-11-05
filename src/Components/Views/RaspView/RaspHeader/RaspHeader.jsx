import React, {Component} from 'react';
import {connect} from "react-redux";
import star from './Icons/star.svg';
import star_active from './Icons/star_active.svg';
import './style.css';
import {addToFavorite, removeFromFavorite} from '../../../../actions/favoriteStorage.js';

class RaspHeader extends Component {

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
        checkFavorite ? this.props.addToFavorite(objInfo) : this.props.removeFromFavorite(objInfo);
        this.setState({isFavorite: checkFavorite});
    }

    render() {
        const {data} = this.props.raspData;
        const {type} = this.props;
        return (
            <div className={'RaspHeader textColor'}>
                <img
                    onClick={() => this.toggleFavorites()}
                    className={'Header_Logo'}
                    src={localStorage.getItem(data[type]) !== null ? star_active : star}
                    alt="error"
                />
                <div className={'Header_Text'}>
                    <h2 className={'header__text_title shift-text text-bold--large'}>{data[type]}</h2>
                    <p className={'text-regular--medium'}>{this.getHeaderWeek()}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        favoriteStorage: state.favoriteStorage,
        raspData: state.raspData
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