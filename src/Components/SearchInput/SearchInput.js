import React, {Component} from 'react';
import {connect} from 'react-redux';
import {convertString} from '../../helpers/helpers';
import './style.css';

const regExp = /\w/gi;

class SearchInput extends Component {
  findItem() {
    const res = Array.from(this.nameInput.value.matchAll(regExp));

    res.map((item) => this.nameInput.value = convertString(this.nameInput.value, item.index));

    this.props.onFindItem(this.nameInput.value);
  }

  render() {
    return (
        <input
            className={`Input Input__search textColor ${this.props.isMobile ?
                'text-medium--small' :
                'text-medium--medium'}`}
            placeholder={'Поиск'}
            value={this.props.findInput}
            ref={(input) => {
              this.nameInput = input;
            }}
            onChange={this.findItem.bind(this)}
            type={'text'}
        />
    );
  }
}

const mapStateToProps = state => {
  return {
    isMobile: state.windowSizes.isMobile,
    findInput: state.filterItems,
  };
};

const mapDispatchToProps = dispatch => {
  return { // Метод реализующий поиск по приложухе //
    onFindItem: name => {
      dispatch({type: 'FIND_ITEM', payload: name});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
