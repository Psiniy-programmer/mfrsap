import React, {Component} from 'react';
import {generateUniqKey} from "../../../../helpers/helpers";
import remove from '../img/remove.svg';
import {connect} from "react-redux";
import {removeFromFavorite} from "../../../../actions/favoriteStorage";
import './style.css';

class FavoriteList extends Component {
    createList() {
        const {data} = this.props;
        const list = [];
        data.map((item, index) => {
            let info = {
                type: localStorage.getItem(item),
                name: item
            }
            let temp = <div key={generateUniqKey('favItem_', index)} className={'FavoriteList__item FavoriteList__item'}>
                <p className={' text-medium--small raspTextColor'}>{item}</p>
                <img onClick={() => this.props.removeFromFavorites(info)} src={remove} alt="error"/>
            </div>
            return list.push(temp);
        })
        return list;
    }

    render() {
        if (this.props.data.length !== 0) {
            return (
                <div className={'FavoriteList'}>
                    <p className={'textColor text-regular--medium'}>{this.props.title}</p>
                    {this.createList()}
                </div>
            );
        } else return null;
    }
}

const mapStateToProps = state => {
    return {
        favoriteStorage: state.favoriteStorage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromFavorites: item => {
            dispatch(removeFromFavorite(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList)