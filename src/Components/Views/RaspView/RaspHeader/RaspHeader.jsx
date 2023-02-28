import React, {Component} from "react";
import {connect} from "react-redux";
import star from "./Icons/star.svg";
import star_active from "./Icons/star_active.svg";
import PDF_icon from "./Icons/PDF_dark.svg";
import {addToFavorite, removeFromFavorite,} from "../../../../actions/favoriteStorage.js";
import Consts from "../../../../helpers/consts";
import {getRaspType} from "../../../../helpers/helpers";
import "./style.css";
import {GeneratedKey, GeneratedTimeStamp} from "../../SettingsView/ExportFav/ExportFav";
import api from "../../../../helpers/api";
import DateWeek from "../../../DateWeek/DateWeek";
import calendar_dark from "./Icons/Calendar-icon.svg";

class RaspHeader extends Component {

    toggleFavorites() {
        const {data} = this.props.raspData;
        const currentRaspType = getRaspType(data);
        const objInfo = {
            type: currentRaspType,
            name: data[currentRaspType],
        };

        let local = localStorage.getItem(objInfo.name);
        let checkFavorite = local === null;
        checkFavorite
            ? this.props.addToFavorite(objInfo)
            : this.props.removeFromFavorite(objInfo);
        this.setState({isFavorite: checkFavorite});
    }

    getMobileView() {
        const {data} = this.props.raspData;
        const {type} = this.props;
        let headerName = data[type];

        if (type === 'group' && headerName && headerName[headerName.length - 1] === 'С') {
            headerName = headerName.slice(0, -1);
        }

        return (
            <div className={"RaspHeader textColor"}>
                <div
                    className={"Header_Logo"}
                    onClick={() => this.toggleFavorites()}
                >
                    <img
                        src={localStorage.getItem(data[type]) !== null ? star_active : star}
                        alt="star"
                    />
                </div>
                <div className={"Header_Text"}>
                    <h3 className={"header__text_title shift-text text-bold--large"}>
                        {headerName}
                    </h3>
                    <div className="header__text_week text-regular--medium">
                        <DateWeek />
                    </div>   
                </div>
            </div>
        );
    }

    getDesktopView() {
        const {data} = this.props.raspData;
        const {type, match} = this.props;
        const raspID = match.params.rasp.split('=')[1];
        
        const storageItem = localStorage.getItem(data[type]);
        let raspHeader = '';
        
        switch (type) {
            case 'aud':
                raspHeader = 'Аудитория ';
                break;
            case 'group':
                raspHeader = 'Группа ';
                break;
            default:
                break;
        }

        if (data[type] !== undefined) {
            console.log(data);
            raspHeader += data[type];

            if (type === 'group' && raspHeader[raspHeader.length - 1] === 'С') {
                raspHeader = raspHeader.slice(0, -1);
            }
        }

        return (
            <>
                <div className={"Header_Text"}>
                    <h3 className={"header__text_title text-bold--header textColor"}>
                        {raspHeader}
                    </h3>
                </div>
                <div className={"RaspHeader textColor"}>
                    {/* <div className="RaspHeader_date">
                        <img className={"date_calendar"} src={calendar_dark} alt="error"/>
                        <DateWeek />
                    </div> */}
                    
                    <div
                        onClick={() => this.toggleFavorites()}
                        className="RaspHeader_favorites"
                    >
                        <img
                            className={"favorites_Logo"}
                            src={storageItem !== null ? star_active : star}
                            alt="star"
                        />
                        <p>
                            {storageItem === null
                                ? "Добавить в избранное"
                                : "Удалить из избранного"}
                        </p>
                    </div>
                    <a target="_blank" href={api.pdf(type, raspID)} className="RaspHeader_PDF">
                        <img className={"PDF_icon"} src={PDF_icon} alt="PDF"/>
                        <p className='textColor'>PDF-версия для печати</p>
                    </a>
                </div>
            </>
        );
    }

    render() {
        const {windowSizes} = this.props;
        return windowSizes.width > Consts.DESKTOP_MIN_WIDTH
            ? this.getDesktopView()
            : this.getMobileView();
    }
}

const mapStateToProps = (state) => {
    return {
        windowSizes: state.windowSizes,
        favoriteStorage: state.favoriteStorage,
        raspData: state.raspData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToFavorite: (item) => {
            localStorage.removeItem(GeneratedKey);
            localStorage.removeItem(GeneratedTimeStamp);
            dispatch(addToFavorite(item));
        },
        removeFromFavorite: (item) => {
            localStorage.removeItem(GeneratedKey);
            localStorage.removeItem(GeneratedTimeStamp);
            dispatch(removeFromFavorite(item));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RaspHeader);