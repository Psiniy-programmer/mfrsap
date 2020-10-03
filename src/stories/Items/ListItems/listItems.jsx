import React, {Component} from 'react';
import MenuItem from "../../../Components/Items/MenuItem/MenuItem";

class ListItems extends Component {

    render() {
        let resArr = [];
        for (let i = 0; i < this.props.count; i++) {
            resArr.push(<MenuItem text={`Test Item ${i}`}/>)
        }
        return (
            <div {...this.props} className={'ListItems'}>
                {resArr}
            </div>
        );
    }
}

export default ListItems;
