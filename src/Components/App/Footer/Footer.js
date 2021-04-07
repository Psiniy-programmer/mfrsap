import React, {Component} from 'react';
import './style.css';

class Footer extends Component {
  render() {
    return (
        <footer className={'Footer'}>
          <p className={'Copyright'}>
            <a className={'textColor text-regular--medium'} href="https://mf.bmstu.ru/">
              2020 © Мытищинский филиал МГТУ им. Н. Э. Баумана
            </a>
          </p>
        </footer>
    );
  }
}

export default Footer;
