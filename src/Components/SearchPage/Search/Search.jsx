import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import './style.css'

class Search extends Component {
    findItem() {
        this.props.onFindItem(this.nameInput.value);
    }

    render() {
        return (
            <div className={'Search'}>
                <input
                    className={'SearchInput'}
                    placeholder={'Поиск'}
                    value={this.props.findInput}
                    ref={(input) => {this.nameInput = input}}
                    onChange={this.findItem.bind(this)}
                    type={'text'}
                />
                <p className={'SearchDescription'}>
                    Или выберите группу из списка
                </p>
                {
                    this.props.findInput.length === 0 ? <div className={'SearchButtons'}>
                        <Link to={`/K`}>
                            <span>К</span>
                        </Link>
                        <Link to={`/LT`}>
                            <span>ЛТ</span>
                        </Link>
                        <Link to={`/Aspirant`}>
                            <span>Аспирантура</span>
                        </Link>
                    </div> : <span>kek</span>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        facultyList: state.facultyList,
        findInput : state.filterItems,
        links: state.linkData
    }
}

const mapDispatchToState = dispatch => {
    return { // Метод реализующий поиск по приложухе //
        onFindItem: name => {
            dispatch({type: 'FIND_ITEM', payload: name})
        },
        dispatchLink: (name, link) => {
            dispatch({type: 'ADD_LINK', name: name, payload: link})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Search);
