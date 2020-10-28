import React, {Component} from 'react';
import SearchItem from "../../../Components/Views/SearchView/SearchItem/SearchItem";

class ListItems extends Component {

    render() {
        let resArr = [];
        for (let i = 0; i < this.props.count; i++) {
            resArr.push(<SearchItem text={`Test Item ${i}`}/>)
        }
        return (
            <div {...this.props} className={'ListItems'}>
                {resArr}
            </div>
        );
    }
}

export default ListItems;
