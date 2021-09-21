import React from 'react';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {text, withKnobs} from "@storybook/addon-knobs";
import MenuItem from "../../../Components/MenuItem/MenuItem";


storiesOf('Menu Card', module)
    .addDecorator(withKnobs)
    .add('Single item', () => <MenuItem onClick={action('MenuItem was clicked')} text={text('Label', 'hello')}/>)
// .add('Lst', () => <ListItems onClick={action('MenuItem was clicked')} text={text('Label', 'hello')} />)
// .add('List of items', () => {
//     // let elemsArr = [];
//     // let countElems = 10;
//     // for (let i = 0;i < countElems; i++) {
//     //     elemsArr.push(<MenuItem onClick={action(`MenuItem ${i} was clicked`)} text={`ITEM NUMBER = ${i}`}/>)
//     // }
//     // return elemsArr;
//     return <ListItems count={countElems} number={number('count', countElems)}/>
// })
// .add('List of items', () => <ListItems />)