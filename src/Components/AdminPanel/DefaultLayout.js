import React, { Component } from 'react';
import  Tables from './Tables'
import Widget from './Widget'
import Charts from './Charts'
import Card from './cards'
 import './layout.css'


class DefaultLayout extends Component {

    render() {
        return (
            <>


           <Card/>
            <Charts/>
           < Widget/>
           <Tables />
            </>
        );
    }
}

export default DefaultLayout;






