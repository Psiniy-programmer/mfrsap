import React, {Component} from 'react';
import './style.css'
import {Link} from "react-router-dom";
import MenuItem from "../../MenuItem/MenuItem";

class SettingsView extends Component {
    render() {
        return <>
            <h2 className={'text-bold--header textColor'}>Настройки</h2>
            <div className={'view__items'}>
                <Link to={'/favorites'}><MenuItem text={'Редактировать избранное'}/></Link>
                <Link to={'/settings/export'}><MenuItem text={'Экспорт избранного'}/></Link>
                <Link to={'/settings/theme'}><MenuItem text={'Сменить тему'}/></Link>
                <Link to={'/settings/feedback'}><MenuItem text={`Обратная связь`}/></Link>
                <Link to={'/settings/manual'}><MenuItem text={'Инструкция по установке из браузера'}/></Link>
                <Link to={'/settings/developers'}><MenuItem text={'Информация о разработчиках'}/></Link>
            </div>
        </>

    }
}

export default SettingsView;