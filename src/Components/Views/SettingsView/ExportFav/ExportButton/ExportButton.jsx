import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.css';

const key = 'GENERATED';

class ExportButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generated: localStorage.getItem(key),
      copyAction: false,
    };

    this.setHandleClick = this.setHandleClick.bind(this);
  }

  async setHandleClick() {
    const context = this;
    let code = '';

    await fetch('https://mf.bmstu.ru/rasp/api/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(this.props.storage)
    })
    .then(function(response) {
      if (!response.ok) {
        return Promise.reject(new Error(
            'Response failed: ' + response.status + ' (' + response.statusText + ')'
        ));
      }
      // Далее будем использовать только JSON из тела ответа.
      return response.json();
    }).then(function(data) {
      console.log(data.code)
      code = data.code

      localStorage.setItem(key, code);
      context.setState({ generated: code });
      // ... Делаем что-то с данными.
    }).catch(function(error) {
      console.log(error)
      // ... Обрабатываем ошибки.
    });
  }

  render() {
    const {generated} = this.state;
    const {isMobile, func} = this.props;
    console.log(this.state);

    if (generated === null) {
      return (
          <div
              onClick={this.setHandleClick}
              className={`ExportButton ${
                  isMobile ? 'text-medium--small' : 'text-medium--medium'
              } raspTextColor`}
          >
            Сгенерировать код
          </div>
      );
    } else {
      return (
          <input
              readOnly
              onClick={func}
              className={`Input textColor ${
                  isMobile ? 'text-medium--small' : 'text-medium--medium'
              }`}
              type="text"
              placeholder="Код"
              value={generated}
          />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.windowSizes.isMobile,
    storage: state.favoriteStorage,
  };
};

export default connect(mapStateToProps)(ExportButton);
