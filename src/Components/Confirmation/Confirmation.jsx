import React, {Component} from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './style.css';

class Confirmation extends Component {
    render() {
        const {onConfirm, onCancel} = this.props;

        return (
            <div className='confirmation'>
                <MenuItem fun={onConfirm} text="ОК"/>
                <MenuItem fun={onCancel} text="Отмена"/>
            </div>
        );
    }
}

export default Confirmation;
