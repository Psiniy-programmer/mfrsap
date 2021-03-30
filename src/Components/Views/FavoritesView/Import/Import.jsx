import React, {Component} from 'react';
import {connect} from 'react-redux';
import MenuItem from '../../../MenuItem/MenuItem';
import './style.css';
import Confirmation from '../../../Confirmation/Confirmation';
import {rewriteStorageData} from '../../../../actions/favoriteStorage';

const test = {
  groups: ['К3-63Б', 'К3-62Б'],
  teachers: [],
  auditoryies: ['365', '465'],
};

class Import extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      code: '',
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

  handleConfirm() {
    this.props.rewriteStorage(test);
    this.setState({
      clicked: true,
    });
  }

  handleCancel() {
    this.setState({
      clicked: false,
    });
  }

  render() {
    const {isMobile} = this.props;
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
