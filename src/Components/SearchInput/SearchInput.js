import React, {Component} from 'react';
import './style.css'
import {connect} from "react-redux";

class SearchInput extends Component {
    findItem() {
        this.props.onFindItem(this.nameInput.value);
    }

    render() {
        return (
            <input
                className={'Input Input__search text-medium--small textColor'}
                placeholder={'Поиск'}
                value={this.props.findInput}
                ref={(input) => {
                    this.nameInput = input
                }}
                onChange={this.findItem.bind(this)}
                type={'text'}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        findInput: state.filterItems
    }
}

const mapDispatchToProps = dispatch => {
    return { // Метод реализующий поиск по приложухе //
        onFindItem: name => {
            dispatch({type: 'FIND_ITEM', payload: name})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
