import React, {Component} from 'react';
import './style.css';

class TittleApp extends Component {
    render() {
        const {match} = this.props;
        return (
            <h1 className={'TittleApp'}>{match.params.department}</h1>
        );
    }
}

export default TittleApp;