import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom'
import {action} from "@storybook/addon-actions";
import {storiesOf} from "@storybook/react";
import NavigationBar from '../../Components/NavigationBar/NavigationBar'

// export default {
//     title: 'Navigation',
//     component: NavigationBar,
// };
//
// const Template = (args) => <BrowserRouter>
//     <Switch>
//         <NavigationBar onClick={action('NavBar icon elem was clicked')} {...args} />
//     </Switch>
// </BrowserRouter>;
//
// export const Bar = Template.bind({});

storiesOf('Navigation', module)
    .add('Bar', () => <BrowserRouter>
        <Switch>
            <NavigationBar onClick={action('Navbar icon elem was clicked')}/>
        </Switch>
    </BrowserRouter>)