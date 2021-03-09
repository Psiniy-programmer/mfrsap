import React, { Component } from 'react';
import './style.css';

const key = "GENERATED";

export default class ExportButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generated: localStorage.getItem(key)
        }

        this.setHandleClick = this.setHandleClick.bind(this);
        this.copyHandleClick = this.copyHandleClick.bind(this);
    }

    setHandleClick() {
        const code = "DKLAD7#ARJL^JLR9393#";
        localStorage.setItem(key, code);
        this.setState({generated: code});
    }

    copyHandleClick() {
        navigator.clipboard.writeText(this.state.generated)
    }

    render() {
        if (this.state.generated === null) {
            return (
              <div
                onClick={this.setHandleClick}
                className="ExportButton text-medium--small raspTextColor"
              >
                Сгенерировать код
              </div>
            );
        } else {
            return (
              <div
                onClick={this.copyHandleClick}
                className="ExportField text-medium--small"
              >
                {this.state.generated}
              </div>
            );
        }
        
    }
}
