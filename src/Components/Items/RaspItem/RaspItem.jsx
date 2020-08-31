import React, {Component} from 'react';
import {connect} from "react-redux";
import RaspItemHeader from "./RaspItemHeader/RaspItemHeader";
import './style.css';
import RaspItemDays from "./RaspItemDays/RaspItemDays";

class RaspItem extends Component {
    render() {
        return (
            <div className={'RaspItem'}>
                <RaspItemHeader match={this.props.match}/>
                <RaspItemDays />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        groupsList: state.groupsList
    }
}

const mapDispatchToState = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToState)(RaspItem)