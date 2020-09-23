import React from 'react';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {text, withKnobs} from "@storybook/addon-knobs";
import MenuItem from "../../../Components/Items/MenuItem/MenuItem";

let elemsArr = [];
let countElems = 10;
for (let i = 1;i < countElems+1; i++) {
    elemsArr.push(<MenuItem onClick={action(`MenuItem ${i} was clicked`)} text={`ITEM NUMBER = ${i}`}/>)
}

storiesOf('Menu Item', module)
    .addDecorator(withKnobs)
    .add('Single item', () => <MenuItem onClick={action('MenuItem was clicked')} text={text('Label', 'hello')} />)
    .add('List of items', () => elemsArr)