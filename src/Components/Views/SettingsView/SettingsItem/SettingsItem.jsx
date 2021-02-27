import React, {Component} from 'react';
import './style.css';

class SettingsItem extends Component {
    render() {
        const {radio, text} = this.props;
        if (radio) {
            return <div className={'SettingsItem SettingsItem__radio text-medium--small'}>
                <p>{text}</p>
                <label className={'toggle raspTextColor'} htmlFor="myToggle">
                    <input className={'toggle__input'} type="checkbox" id={'myToggle'}/>
                    <div className="toggle__fill"/>
                </label>
            </div>
        } else {
            return <p className={`SettingsItem text-medium--small`}>{text}</p>
        }
    }
}

export default SettingsItem;