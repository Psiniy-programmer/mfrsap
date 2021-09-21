import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeTheme} from "../../../../actions/theme";
import consts from '../../../../helpers/consts';
import {DARK_THEME, LIGHT_THEME, SYSTEM_THEME} from "../../../../reducers/theme";
import './style.css';

class ThemeChanger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            LIGHT_THEME: this.props.currentTheme === LIGHT_THEME,
            DARK_THEME: this.props.currentTheme === DARK_THEME,
            SYSTEM_THEME: this.props.currentTheme === SYSTEM_THEME
        }
    }

    render() {
        const {windowWidth} = this.props;
        const isMobile = windowWidth < consts.DESKTOP_MIN_WIDTH;

        return <>
            <h2 className={'text-bold--header textColor'}>Сменить тему</h2>
            <div className={`ThemeChanger raspTextColor ${isMobile ? 'text-medium--small' : 'text-medium--medium'}`}>
                <label onClick={() => this.props.changeTheme(LIGHT_THEME)} className="ThemeChanger__changer">
                    Светлая тема
                    <input defaultChecked={this.state.LIGHT_THEME} className={'ThemeChanger__input'} id={'light'}
                           name={'radio-group'} type={'radio'}/>
                    <span className={'ThemeChanger__checkbox'}/>
                </label>
                <label onClick={() => this.props.changeTheme(DARK_THEME)} className="ThemeChanger__changer">
                    Тёмная тема
                    <input defaultChecked={this.state.DARK_THEME} className={'ThemeChanger__input'} id={'dark'}
                           name={'radio-group'} type={'radio'}/>
                    <span className={'ThemeChanger__checkbox'}/>
                </label>
                <label onClick={() => this.props.changeTheme(SYSTEM_THEME)} className="ThemeChanger__changer">
                    Системная настройка
                    <input defaultChecked={this.state.SYSTEM_THEME} className={'ThemeChanger__input'} id={'system'}
                           name={'radio-group'} type={'radio'}/>
                    <span className={'ThemeChanger__checkbox'}/>
                </label>
            </div>
        </>
    }
}

const mapStateToProps = state => {
    return {
        currentTheme: state.theme,
        windowWidth: state.windowSizes.width
    }
};

// Исползьуем наше actions для прокидывания данных в наш store //
const mapDispatchToProps = dispatch => {
    return {
        changeTheme: theme => {
            dispatch(changeTheme(theme))
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeChanger);