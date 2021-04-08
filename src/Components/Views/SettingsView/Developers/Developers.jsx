import React, {Component} from 'react';
import './style.css'
import {connect} from "react-redux";

class Developers extends Component {
    render() {
        const {isMobile} = this.props;
        let pFont = isMobile ? 'text-regular--small' : 'text-regular--medium'

        return (
            <>
                <h2 className={'developers__header text-bold--header textColor'}>Информация о разработчиках</h2>
                <div className={'developers__items textColor'}>
                    <p className={pFont}>Frontend: Дмитрий Овденко.</p>
                    <p className={pFont}>Backend: Артем Назаров. </p>
                    <p className={pFont}>Design: Анастасия Подворная.</p>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isMobile: state.windowSizes.isMobile
    }
}

export default connect(mapStateToProps)(Developers);