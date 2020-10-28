import React, {Component} from 'react';
import './style.css'
import SettingsItem from "./SettingsItem/SettingsItem";
import {Link} from "react-router-dom";

class SettingsView extends Component {
    render() {
        return (
            <div className={'Settings__view'}>
                <Link to={'/favorites'}><SettingsItem text={'Редактировать избранное'}/></Link>
                <SettingsItem radio={true} text={'Тёмная тема'}/>
                <SettingsItem text={`Обратная связь`}/>
                <SettingsItem text={'Инструкция по установке из браузера'}/>
                <SettingsItem text={'Информация о разработчиках'}/>
            </div>
        );
    }
}

export default SettingsView;