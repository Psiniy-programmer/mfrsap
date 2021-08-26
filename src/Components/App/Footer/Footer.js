import React, {Component} from 'react';
import {connect} from "react-redux";
import './style.css';

class Footer extends Component {
  render() {
    return (
        <footer className={'Footer'}>
          <p className={'Copyright'}>
            <a className={'textColor text-regular--medium'} href="https://mf.bmstu.ru/">
              {this.props.date.getFullYear()} © Мытищинский филиал МГТУ им. Н. Э. Баумана
            </a>
          </p>
        </footer>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        date: state.appTimer.date
    };
};

export default connect(mapStateToProps, null)(Footer);
