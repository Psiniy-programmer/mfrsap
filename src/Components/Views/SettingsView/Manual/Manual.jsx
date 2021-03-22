import React, {Component} from 'react';
import './style.css';

class Manual extends Component {
    render() {
        return (
            <div className={'manual'}>
                <h2 className={'text-bold--header textColor'}>Инструкция по установке</h2>
                <p className={'manual--text text-medium--small textColor'}>В разработке</p>
            </div>
        );
    }
}

export default Manual;