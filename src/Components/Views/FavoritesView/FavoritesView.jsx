import React, {Component} from 'react';
import './style.css';
import satellite from './img/satellite.svg';

class FavoritesView extends Component {
    render() {
        return (
            <div className={'favorites'}>
                <img className={'satellite'} src={satellite} alt="imgError"/>
                <div className={'emptyFavorites'}>
                    <p className={'emptyFavorites__text_info text-regular--small black'}>Здесь пока ничего нет.</p>
                    <p className={'emptyFavorites__text_helper text-regular--small black'}>Чтобы добавить группу, преподавателя или аудиторию в избранное, нажмите на звёздочку в левом верхнем углу расписания.</p>
                </div>
            </div>
        );
    }
}

export default FavoritesView;