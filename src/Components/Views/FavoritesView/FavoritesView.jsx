import React, {Component} from 'react';
import './style.css';
import satellite from './img/satellite.svg';
import {connect} from 'react-redux';
import FavoriteList from "./FavoriteList/FavoriteList";

class FavoritesView extends Component {

    favoriteStorageIsEmpty() {
        const {favoriteStorage} = this.props;
        let isEmpty = true;
        for (let key in favoriteStorage)
            if (favoriteStorage[key].length !== 0)
                isEmpty = false;
        return isEmpty;
    }

    emptyView() {
        return (
            <div className={'favorites__empty'}>
                <img className={'satellite'} src={satellite} alt="imgError"/>
                <div className={'emptyFavorites'}>
                    <p className={'emptyFavorites__text_info text-regular--small textColor'}>Здесь пока ничего нет.</p>
                    <p className={'emptyFavorites__text_helper text-regular--small textColor'}>Чтобы добавить группу, преподавателя или аудиторию в избранное, нажмите на звёздочку в левом верхнем углу расписания.</p>
                </div>
            </div>
        );
    }
    render() {
       const {groups, teachers, auditoryies} = this.props.favoriteStorage;
       if (this.favoriteStorageIsEmpty())
           return this.emptyView()
        else return <div className={'favorites__completed'}>
           <FavoriteList data={groups} title={'Группы'}/>
           <FavoriteList data={teachers} title={'Преподаватели'}/>
           <FavoriteList data={auditoryies} title={'Аудитории'}/>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        favoriteStorage: state.favoriteStorage
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesView)