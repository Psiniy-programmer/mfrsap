import React from 'react';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {text, withKnobs, number} from "@storybook/addon-knobs";
import ListItems from './listItems.jsx'


let countElems = 10;

storiesOf('Menu Item', module)
    .addDecorator(withKnobs)
    .add('List of items', () => <ListItems onClick={action('MenuItem was clicked')} count={countElems} number={number('countELems', countElems)} />)
