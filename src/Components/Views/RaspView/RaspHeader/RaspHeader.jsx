import React, {Component} from 'react';
import './style.css';
import {connect} from "react-redux";
import star from './Icons/star.svg';
import star_active from './Icons/star_active.svg';
import calendar_dark from './Icons/Calendar-icon.svg';
import PDF_icon from './Icons/PDF_dark.svg'
import {addToFavorite, removeFromFavorite} from '../../../../actions/favoriteStorage.js';
import Consts from "../../../../helpers/consts"
import {getRaspType} from "../../../../helpers/helpers";

class RaspHeader extends Component {

    getHeaderWeek() {
        return this.props.weekIsOdd ? 'Числитель' : 'Знаменатель'
    }

    toggleFavorites() {
        const {data} = this.props.raspData;
        const currentRaspType = getRaspType(data)
        const objInfo = {
            type: currentRaspType,
            name: data[currentRaspType]
        };
        let local = localStorage.getItem(objInfo.name),
            checkFavorite = local === null;
        checkFavorite ? this.props.addToFavorite(objInfo) : this.props.removeFromFavorite(objInfo);
        this.setState({isFavorite: checkFavorite});
    }

    getMobileView() {
        const {data} = this.props.raspData;
        const {type} = this.props;
        return <div className={'RaspHeader textColor'}>
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
    }

    getDesktopView() {
        const {data} = this.props.raspData;
        const {type} = this.props;
        const date = new Date()
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        let dateText = date.toLocaleDateString("ru", options)

        dateText = dateText.substring(0, dateText.length - 3) // удаляем лишние буквы из года
        dateText += ` - ${this.getHeaderWeek()}`

        return <>
            <div className={'Header_Text'}>
                <h2 className={'header__text_title text-bold--header textColor'}>{data[type]}</h2>
            </div>
            <div className={'RaspHeader textColor'}>
                <div className="RaspHeader_date">
                    <img
                        className={'date_calendar'}
                        src={calendar_dark}
                        alt="error"/>
                    <p>{dateText}</p>
                </div>
                <div onClick={() => this.toggleFavorites()} className="RaspHeader_favorites">
                    <img
                        className={'favorites_Logo'}
                        src={localStorage.getItem(data[type]) !== null ? star_active : star}
                        alt="error"
                    />
                    <p>Добавить в избранное</p>
                </div>
                <div onClick={() => alert("В разработке")} className="RaspHeader_PDF">
                    <img
                        className={'PDF_icon'}
                        src={PDF_icon}
                        alt="error"/>
                    <p>PDF-версия для печати</p>
                </div>
            </div>
        </>
    }

    render() {
        const {windowSizes} = this.props;
        return windowSizes.width > Consts.DESKTOP_MIN_WIDTH ?
            this.getDesktopView() : this.getMobileView()
    }
}

const mapStateToProps = state => {
    return {
        windowSizes: state.windowSizes,
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