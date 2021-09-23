import React, {Component} from 'react';
import PopUp from '../../../PopUp/PopUp';
import ExportButton from './ExportButton/ExportButton';
import './style.css';
import {connect} from 'react-redux';
import api from "../../../../helpers/api";

export const GeneratedKey = 'GENERATED';
export const GeneratedTimeStamp = 'TIME_STAMP';
export const diffForRemove = 604800;

class ExportFav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generated: localStorage.getItem(GeneratedKey),
            timeStamp: localStorage.getItem(GeneratedTimeStamp),
            copyAction: false
        };

        this.handleCopy = this.handleCopy.bind(this);
        this.setHandleClick = this.setHandleClick.bind(this);
    }

    async setHandleClick() {
        const context = this;
        let code = '';
        let timeStamp = '';

        await fetch(api.favorites.export, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(this.props.storage),
        }).then(function (response) {
            if (!response.ok) {
                return Promise.reject(new Error(
                    'Response failed: ' + response.status + ' (' + response.statusText +
                    ')',
                ));
            }

            return response.json();
        }).then(function (data) {
            code = data.code;
            timeStamp = data.date;
            localStorage.setItem(GeneratedKey, code);
            localStorage.setItem(GeneratedTimeStamp, timeStamp);
            context.setState({generated: code});
        }).catch(function (error) {
            console.error(error);
        });
    }

    handleCopy() {
        navigator.clipboard.writeText(this.state.generated);
        this.setState({copyAction: true});
        setTimeout(() => {
            this.setState({copyAction: false});
        }, 2000);
    }

    componentDidMount() {
        if (this.props.appTimer.date - Number(this.state.time) > diffForRemove) {
            localStorage.removeItem(GeneratedKey);
            localStorage.removeItem(GeneratedTimeStamp);
            this.setState({generated: '', timeStamp: ''});
        }
    }

    render() {
        const {copyAction, generated} = this.state;
        const {isMobile} = this.props;

        return (
            <div className="content_info">
                <div className="Export">
                    <h2 className={` ${isMobile ? 'text-medium--medium' : 'text-bold--header'} textColor`}>Экспорт
                        избранного</h2>
                    <div className="Export__content">
                        <ExportButton
                            func={this.handleCopy}
                            fetchFunc={this.setHandleClick}
                            generated={generated}
                            isMobile={isMobile}
                            copyAction={this.state.copyAction}
                        />
                        <p className={`${isMobile ? 'text-regular--small' : 'text-regular--medium'} textColor`}>
                            Скопируйте код и затем вставьте его в форму на странице избранного
                            на новом устройстве.
                        </p>
                    </div>
                    {copyAction && <PopUp text='Код скопирован в буфер обмена'/>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appTimer: state.appTimer,
        storage: state.favoriteStorage,
        isMobile: state.windowSizes.isMobile,
    };
};

export default connect(mapStateToProps)(ExportFav);
