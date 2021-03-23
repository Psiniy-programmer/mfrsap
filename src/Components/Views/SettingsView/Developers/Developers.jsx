import React, {Component} from 'react';
import './style.css'

class Developers extends Component {
    render() {
        return (
            <>
                <h2 className={'developers__header text-bold--header textColor'}>Информация о разработчиках</h2>
                <div className={'developers__items'}>
                    <p className={'text-regular--medium textColor'}>Frontend: Дмитрий Овденко.</p>
                    <p className={'text-regular--medium textColor'}>Backend: Артем Назаров. </p>
                    <p className={'text-regular--medium textColor'}>Design: Анастасия Подворная.</p>
                </div>
            </>
        );
    }
}

export default Developers;