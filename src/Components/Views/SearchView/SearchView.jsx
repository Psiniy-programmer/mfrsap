import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import './style.css'
class SearchView extends Component {
    findItem() {
        this.props.onFindItem(this.nameInput.value);
    }

    getView() {
        if (this.props.findInput.length === 0) {
            return <div className={'SearchButtons'}>
                <Link to={`/search/K`}>
                    <span className={'raspTextColor'}>К</span>
                </Link>
                <Link to={`/search/LT`}>
                    <span className={'raspTextColor'}>ЛТ</span>
                </Link>
                <Link to={`/search/Aspirant`}>
                    <span className={'raspTextColor'}>Аспирантура</span>
                </Link>
            </div>
        } else {
            return <span>return list</span>
        }
    }

    render() {
        return (
            <div className={'Search'}>
                <input
                    className={'SearchInput text-medium--small textColor'}
                    placeholder={'Поиск'}
                    value={this.props.findInput}
                    ref={(input) => {
                        this.nameInput = input
                    }}
                    onChange={this.findItem.bind(this)}
                    type={'text'}
                />
                <p className={'SearchDescription text-regular--medium textColor'}>
                    Или выберите группу из списка
                </p>
                {this.getView()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        facultyList: state.facultyList,
        findInput: state.filterItems,
    }
}

const mapDispatchToState = dispatch => {
    return { // Метод реализующий поиск по приложухе //
        onFindItem: name => {
            dispatch({type: 'FIND_ITEM', payload: name})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToState)(SearchView);
