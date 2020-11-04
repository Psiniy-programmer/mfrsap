import React, {Component} from 'react';

class KekComponent extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div>
                kek
            </div>
        );
    }
}

export default KekComponent;