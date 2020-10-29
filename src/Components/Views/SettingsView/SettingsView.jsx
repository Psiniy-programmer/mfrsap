import React, {Component} from 'react';
import './style.css'
import {Link} from "react-router-dom";
import MenuItem from "../../MenuItem/MenuItem";

class SettingsView extends Component {
    render() {
        return (
            <div className={'Settings__view'}>
                <Link to={'/favorites'}><MenuItem text={'Редактировать избранное'}/></Link>
                <Link to={'/settings/theme'}><MenuItem text={'Сменить тему'}/></Link>
                <MenuItem text={`Обратная связь`}/>
                <MenuItem text={'Инструкция по установке из браузера'}/>
                <MenuItem text={'Информация о разработчиках'}/>
            </div>
        );
    }
}

export default SettingsView;