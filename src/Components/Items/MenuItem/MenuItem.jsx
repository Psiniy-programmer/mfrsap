import React, {Component} from 'react';
import './style.css'
import {connect} from "react-redux";


class MenuItem extends Component {
    render() {
        return (
            <div className={'MenuItem'}>
                <p >{this.props.text}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        links: state.linkData
    }
}

const mapDispatchToState = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToState)(MenuItem);
