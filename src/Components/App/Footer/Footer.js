import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer className={"Footer"}>
        <a href="https://mf.bmstu.ru/">
          <p className={"Copyright textColor text-regular--medium"}>
            2020 © Мытищинский филиал МГТУ им. Н. Э. Баумана
          </p>
        </a>
      </footer>
    );
  }
}

export default Footer;
