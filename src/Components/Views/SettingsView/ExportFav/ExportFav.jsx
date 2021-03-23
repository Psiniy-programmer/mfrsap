import React, { Component } from 'react'
import ExportButton from './ExportButton/ExportButton';
import "./style.css";

class ExportFav extends Component {
    render() {
        return (
          <div className="Export">
            <h2 className={"text-bold--header textColor"}>
              Экспорт избранного
            </h2>
            <div className="Export__content">
              <ExportButton />
              <p className="textColor text-regular--small">
                Скопируйте код и затем вставьте его в форму на странице
                избранного на новом устройстве.
              </p>
            </div>
          </div>
        );
    }
}

export default ExportFav;
