import React, { Component } from 'react';
import  Tables from './Tables'
import Widget from './Widget'
import Charts from './Charts'
class DefaultLayout extends Component {
    render() {
        return (
            <>
<Charts/>
          < Widget/>
           <Tables />
            </>
        );
    }
}

export default DefaultLayout;
