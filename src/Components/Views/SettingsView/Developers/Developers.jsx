import React, {Component} from 'react';
import './style.css'

class Developers extends Component {
    render() {
        return (
            <>
                <h2 className={'text-bold--header'}>Информация о разработчиках</h2>
                <div className={'developers__items'}>
                    <p className={'text-regular--medium textColor'}>Frontend: Дмитрий Овденко.</p>
                    <p className={'text-regular--medium textColor'}>Backend: Артем Назаров, Казбек Ахмедов.</p>
                    <p className={'text-regular--medium textColor'}>Design: Анастасия Подворная.</p>
                </div>
            </>
        );
    }
}

export default Developers;