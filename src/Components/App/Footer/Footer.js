import React, {Component} from 'react';
import './style.css'

class Footer extends Component {
    render() {
        return (
            <div className={'Footer'}>
                <p className={'Copyright textColor text-regular--medium'}>2020 © Мытищинский филиал МГТУ им. Н. Э. Баумана</p>
            </div>
        );
    }
}

export default Footer;