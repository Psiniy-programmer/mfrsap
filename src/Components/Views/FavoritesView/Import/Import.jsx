import React, {Component} from 'react';
import {connect} from 'react-redux';
import MenuItem from '../../../MenuItem/MenuItem';
import './style.css';
import Confirmation from '../../../Confirmation/Confirmation';
import {rewriteStorageData} from '../../../../actions/favoriteStorage';
import PopUp from "../../../PopUp/PopUp";

class Import extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      code: '',
      popUp: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange() {
    this.setState({
      code: this.codeInput.value,
    });
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  async handleConfirm() {
    this.setState({
      clicked: false,
    });

    if (!this.state.code) {
      this.setState({popUp: true});
      return setTimeout(() => {
        this.setState({popUp: false});
      }, 2000);
    }

    let newDat = {
      groups: [],
      teachers: [],
      auditoryies: []
    }

    await fetch(
        `https://rasp.msfu.ru/api/favorites?code=${this.state.code}`)
        .then((response) => response.json())
        .catch((error) => console.error(error))
        .then((res) => newDat = res);

    this.props.rewriteStorage(newDat);
    this.setState({code: ''})
  }

  handleCancel() {
    this.setState({
      clicked: false,
    });
  }

  render() {
    const {isMobile, popUp} = this.props;
    const {code, clicked} = this.state;
    return <div className={`import textColor`}>
      <p className={isMobile ?
          'text-regular--small' :
          'text-regular--medium'}>
        {clicked ?
            'Перезаписать данные?' :
            'Импорт избранного с другого устройства:'}
      </p>
      {!clicked ?
          <div className="import__content">
            <input
                onChange={this.handleChange}
                placeholder="Код"
                className={`Input textColor ${
                    isMobile ? 'text-medium--small' : 'text-medium--medium'
                }`}
                type="text"
                value={code}
                ref={(input) => {
                  this.codeInput = input;
                }}
            />
            <MenuItem fun={this.handleClick} text="ОК"/>
          </div> :
          <Confirmation
              onConfirm={this.handleConfirm}
              onCancel={this.handleCancel}
          />
      }
      {
        popUp && <PopUp text="ОШИБКА" />
      }
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    storage: state.favoriteStorage,
    isMobile: state.windowSizes.isMobile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    rewriteStorage: (data) => {
      dispatch(rewriteStorageData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Import);
