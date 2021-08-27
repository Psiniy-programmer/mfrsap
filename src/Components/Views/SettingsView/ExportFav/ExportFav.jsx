import React, {Component} from 'react';
import PopUp from '../../../PopUp/PopUp';
import ExportButton from './ExportButton/ExportButton';
import './style.css';
import {connect} from 'react-redux';

const key = 'GENERATED';

class ExportFav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generated: localStorage.getItem(key),
            copyAction: false,
        };

        this.handleCopy = this.handleCopy.bind(this);
        this.setHandleClick = this.setHandleClick.bind(this);
    }

    async setHandleClick() {
        const context = this;
        let code = '';

        await fetch('https://rasp.msfu.ru/api/favorites', {
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
            localStorage.setItem(key, code);
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

    componentWillUnmount() {
        localStorage.removeItem(key);
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
                    {copyAction && <PopUp text='Код скопирован в буфер обмена'/> }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storage: state.favoriteStorage,
        isMobile: state.windowSizes.isMobile,
    };
};

export default connect(mapStateToProps)(ExportFav);
