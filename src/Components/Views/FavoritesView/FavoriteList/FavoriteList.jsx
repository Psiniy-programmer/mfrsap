import React, {Component} from 'react';
import {generateUniqKey} from "../../../../helpers/helpers";
import remove from '../img/remove.svg';
import {connect} from "react-redux";
import {removeFromFavorite} from "../../../../actions/favoriteStorage";
import './style.css';
import {Link} from "react-router-dom";

class FavoriteList extends Component {

    findLink(item) {
        const {list} = this.props;
        let properties = {
            name: '',
            id: ''
        }
        let link;
        switch (item.type) {
            case 'group' :
                properties.name = 'groupname';
                properties.id = 'groupid';
                break;
            case 'teacher' :
                properties.name = 'teacher';
                properties.id = 'teacherid';
                break;
            case 'aud' :
                properties.name = 'aud';
                properties.id = 'audid';
                break;
            default:
                break;
        }
        link = `${properties.id}=`;

        list.map(elem => {
            return item.name === elem[properties.name] ? link += elem[properties.id] : null
        });
        return link;
    }

    createList() {
        const {data} = this.props;
        const list = [];

        data.map((item, index) => {
            let info = {
                type: localStorage.getItem(item),
                name: item
            }
            let link = this.findLink(info);
            let temp = <div className={'FavoriteList_item'}>
                <Link className={'fullWidth'} key={generateUniqKey('favItem_', index)} to={`/list/${link}`}>
                    <p className={'FavoriteList_item__context text-medium--small raspTextColor'}>
                        {item}
                    </p>
                </Link>
                <img className={'FavoriteList_item__context'}
                     onClick={() => this.props.removeFromFavorites(info)}
                     src={remove} alt="error"
                />
            </div>

            return list.push(temp);
        })
        return list;
    }

    render() {
        if (this.props.data.length !== 0) {
            return (
                <div className={'FavoriteList'}>
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