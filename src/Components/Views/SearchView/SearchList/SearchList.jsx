import React, {Component} from 'react';
import './style.css';
import {generateUniqKey} from "../../../../helpers/helpers";

class SearchList extends Component {
    createList() {
        const {data, title} = this.props;
        const list = [];
        let type;
        switch (title) {
            case 'Группы' : type = 'groupname'; break;
            case 'Преподователи' : type = 'teacher'; break;
            case 'Аудитории' : type = 'aud'; break;
        }
        data.map((item, index) => {
            if (item !== undefined) {
                let temp = <div key={generateUniqKey('SearchItem_', index)} className={'FavoriteList__item FavoriteList__item'}>
                    <p className={' text-medium--small raspTextColor'}>{item[type]}</p>
                </div>
                list.push(temp);
            }
        })
        return list
    }

    listIsEmpty() {
        const {data} = this.props;
        let undefItemsCounter = 0;
        data.map(item => item === undefined ? undefItemsCounter++ : null);
        return undefItemsCounter === data.length;
    }

    render() {
        if (!this.listIsEmpty()) {
            return (
                <div className={'SearchList'}>
                    <p className={'textColor text-regular--medium'}>{this.props.title}</p>
                    {this.createList()}
                </div>
            );
        } else return null;
    }
}

export default SearchList;