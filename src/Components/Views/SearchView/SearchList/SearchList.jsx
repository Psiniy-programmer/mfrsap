import React, {Component} from 'react';
import './style.css';
import {generateUniqKey} from "../../../../helpers/helpers";
import {Link} from "react-router-dom";

class SearchList extends Component {
    createList() {
        const {data, title} = this.props;
        const list = [];
        let type = {
            name: '',
            id: ''
        };
        switch (title) {
            case 'Группы' :
                type.name = 'groupname';
                type.id = 'groupid';
                break;
            case 'Преподователи' :
                type.name = 'teacher';
                type.id = 'teacherid';
                break;
            case 'Аудитории' :
                type.name = 'aud';
                type.id = 'audid';
                break;
            default: break;
        }
        data.map((item, index) => {
            if (item !== undefined && item !== null) {
                let temp = <Link key={generateUniqKey('SearchItem_', index)} to={`/list/${type.id}=${item[type.id]}`}>
                    <div className={'SearchList_item'}>
                        <p className={' text-medium--small raspTextColor'}>{item[type.name]}</p>
                    </div>
                </Link>
                return list.push(temp);
            }
            return null
        })
        return list
    }

    listIsEmpty() {
        const {data} = this.props;
        let undefItemsCounter = 0;
        data.map(item => item === undefined || item === null ? undefItemsCounter++ : null);

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