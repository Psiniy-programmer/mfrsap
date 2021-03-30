import React, {Component} from 'react';
import './style.css';

class ExportButton extends Component {
  render() {
    const {isMobile, func, fetchFunc, generated} = this.props;

    if (generated === null) {
      return (
          <div
              onClick={fetchFunc}
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

export default ExportButton;
