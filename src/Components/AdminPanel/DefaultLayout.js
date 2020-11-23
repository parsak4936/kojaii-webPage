import React, { Component } from 'react';
import  Form_Tables from './Tables/Tables'
import  Joinus_table from './Tables/joinus_table'
import Charts from './Charts/Charts'
import Card from './Cards/cards'
 import './layout.css'

class DefaultLayout extends Component {
    showSettings (event) {
        event.preventDefault();

    }
    render() {
        return (
            <>
<div className="AdminContainer">
    <div className="cards">
        <Card/>
    </div>


        <div className="charts">
            <Charts/>
        </div>



  <div className="form_table">
      <Form_Tables />
  </div>

    <div className="joinus_table">
        <Joinus_table/>
    </div>



</div>




              

            </>
        );
    }
}

export default DefaultLayout;






