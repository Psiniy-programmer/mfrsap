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
          <div className={"favorites__empty"}>
            <img className={"satellite"} src={satellite} alt="imgError" />
            <div className={"emptyFavorites"}>
              <p
                className={
                  "emptyFavorites__text_info text-regular--small textColor"
                }
              >
                Здесь пока ничего нет.
              </p>
              <p
                className={
                  "emptyFavorites__text_helper text-regular--small textColor"
                }
              >
                Выберите группу, преподавателя или аудиторию на странице поиска,
                чтобы добавить их в избранное.
              </p>
            </div>
          </div>
        );
    }

    resultView() {
        const {groups, teachers, auditoryies} = this.props.favoriteStorage;
        const { groupsList, teachersList, auditoryList} = this.props;

        return <div className={'favorites__completed'}>
            <FavoriteList list={groupsList} data={groups} title={'Группы'}/>
            <FavoriteList list={teachersList} data={teachers} title={'Преподаватели'}/>
            <FavoriteList list={auditoryList} data={auditoryies} title={'Аудитории'}/>
        </div>
    }

    render() {
        return <>
            <h2 className={'text-bold--header textColor'}>Избранное</h2>
            {this.favoriteStorageIsEmpty() ? this.emptyView() : this.resultView()}
        </>
    }
}

const mapStateToProps = state => {
    return {
        favoriteStorage: state.favoriteStorage,
        groupsList: state.altList.data,
        teachersList: state.teachersList.data,
        auditoryList: state.auditoryList.data
    }
}

export default connect(mapStateToProps)(FavoritesView)