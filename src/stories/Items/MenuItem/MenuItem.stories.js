import React from 'react';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {text, withKnobs, number} from "@storybook/addon-knobs";
import SearchItem from "../../../Components/Views/SearchView/SearchItem/SearchItem";



storiesOf('Menu Card', module)
    .addDecorator(withKnobs)
    .add('Single item', () => <SearchItem onClick={action('SearchItem was clicked')} text={text('Label', 'hello')} />)
    // .add('Lst', () => <ListItems onClick={action('SearchItem was clicked')} text={text('Label', 'hello')} />)
// .add('List of items', () => {
    //     // let elemsArr = [];
    //     // let countElems = 10;
    //     // for (let i = 0;i < countElems; i++) {
    //     //     elemsArr.push(<SearchItem onClick={action(`SearchItem ${i} was clicked`)} text={`ITEM NUMBER = ${i}`}/>)
    //     // }
    //     // return elemsArr;
    //     return <ListItems count={countElems} number={number('count', countElems)}/>
    // })
    // .add('List of items', () => <ListItems />)