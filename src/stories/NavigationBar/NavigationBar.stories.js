import React from 'react';
import {BrowserRouter, Switch } from 'react-router-dom'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'

export default {
    title: 'Example/Navigation',
    component: NavigationBar,
};

const Template = (args) => <BrowserRouter>
    <Switch>
        <NavigationBar {...args} />
    </Switch>
</BrowserRouter>;

export const Bar = Template.bind({});
Bar.args = {

};