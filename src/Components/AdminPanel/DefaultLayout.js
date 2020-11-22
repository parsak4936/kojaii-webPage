import React, { Component } from 'react';
import  Tables from './Tables'
import Widget from './Widget'
import Charts from './Charts'
import Card from './cards'
 import './layout.css'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
class DefaultLayout extends Component {
    showSettings (event) {
        event.preventDefault();

    }
    render() {
        return (
            <>


                        <Card/>
                        <Charts/>
                        <Widget/>
                        <Tables />



              

            </>
        );
    }
}

export default DefaultLayout;






