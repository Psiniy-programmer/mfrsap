/* eslint-disable no-loop-func */
import React, {Component} from 'react';
import './style.css';
import {generateUniqKey} from "../../../../helpers/helpers";
import {Link} from "react-router-dom";

class SearchList extends Component {
    createList() {
        const {data, title} = this.props;
        const list = [];
        let type = {
          name: "",
          id: "",
        };

        switch (title) {
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
        
        if (title === 'Группы') {
            for (let key in data) {
                for (let type in data[key]) {
                    data[key][type].map((item) => {
                        if (item !== undefined && item !== null) {
                            let temp = <Link key={generateUniqKey('SearchItem_', item.groupname)} to={`/list/groupid=${item.groupid}`}>
                                <div className={'SearchList_item'}>
                                    <p className={' text-medium--small raspTextColor'}>{item.groupname}</p>
                                </div>
                            </Link>
                            return list.push(temp);
                        }
                        return null
                    })
                }
            }
        } else {
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
        }

        return list
    }

    listIsEmpty() {
        const {data, title} = this.props;
        
        if (data === undefined) {
            return true
        }
    
        let undefItemsCounter = 0;
        if (title === 'Группы') {
            let length = 0;
            for (let key in data) {
                for (let type in data[key]) {
                    length += data[key][type].length;
                    data[key][type].map(item => item === undefined || item === null ? undefItemsCounter++ : null);
                }
            }
            return undefItemsCounter === length;

        } else {
            data.map(item => item === undefined || item === null ? undefItemsCounter++ : null);
           return undefItemsCounter === data.length;
        }
    
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