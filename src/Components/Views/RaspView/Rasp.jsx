import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import RaspHeader from './RaspHeader/RaspHeader';
import DaysCarousel from './DaysCarousel/DaysCarousel';
import {fetchRaspData} from '../../../actions/raspData';
import Schedule from './Schedule/Schedule';
import {findRequestType} from '../../../helpers/helpers';
import Consts from '../../../helpers/consts';
import AppHeader from '../../App/Header/AppHeader';
import {getDayIndex, updateDayIndex, weekIsOdd,} from '../../../actions/appTimer';
import './style.css';
import Loader from "../../Loader/Loader";

class Rasp extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            type: {
                name: '',
                type: '',
            },
        };
    }

    componentDidMount() {
        const {rasp} = this.props.match.params;
        const {weekIsOdd, getDayIndex} = this.props;

        getDayIndex();
        weekIsOdd();

        const id = rasp.match(/\d+/g)[0];
        const type = findRequestType(rasp);
        this.setState({type: type});
        this.props.fetchRaspData(type.name, id);
    }

    getHeader() {
        const {windowSize} = this.props;

        if (windowSize.width > Consts.DESKTOP_MIN_WIDTH) return <AppHeader/>;
    }

    render() {
        const {type} = this.state;
        const {match, updateDayIndex} = this.props;
        const {isOdd, dayIndex} = this.props.appTimer;
        const {loading} = this.props.raspData;

        if (loading) {
            return <Loader/>
        } else {
            return (
                <div className={'RaspView'}>
                    {this.getHeader()}
                    <RaspHeader weekIsOdd={isOdd} match={match} type={type.name}/>
                    <DaysCarousel currentDayIndex={dayIndex} updateDays={updateDayIndex}/>
                    <Schedule match={match} type={type.name}/>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        appTimer: state.appTimer,
        windowSize: state.windowSizes,
        raspData: state.raspData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRaspData: (type, id) => {
            dispatch(fetchRaspData(type, id));
        },
        getDayIndex: () => {
            dispatch(getDayIndex());
        },
        weekIsOdd: () => {
            dispatch(weekIsOdd());
        },
        updateDayIndex: (index) => {
            dispatch(updateDayIndex(index));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rasp);
