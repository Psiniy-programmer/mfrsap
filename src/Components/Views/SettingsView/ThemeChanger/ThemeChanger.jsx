import React, {Component} from 'react';
import './style.css';

class ThemeChanger extends Component {
    render() {
        return (
            <div className={'ThemeChanger'}>
                <label className="ThemeChanger__changer text-regular--small">
                        Светлая
                        <input className={'ThemeChanger__input'} id={'light'} name={'radio-group'} type={'radio'}/>
                        <span className={'ThemeChanger__checkbox'}/>
                </label>
                <label className="ThemeChanger__changer text-regular--small">
                        Тёмная
                        <input className={'ThemeChanger__input'} id={'dark'} name={'radio-group'} type={'radio'}/>
                        <span className={'ThemeChanger__checkbox'}/>
                </label>
                <label className="ThemeChanger__changer text-regular--small">
                        Системная настройка
                        <input className={'ThemeChanger__input'} id={'system'} name={'radio-group'} type={'radio'}/>
                        <span className={'ThemeChanger__checkbox'}/>
                </label>
            </div>
        );
    }
}

export default ThemeChanger;