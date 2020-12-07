import React, {Component, useEffect, useState} from 'react';
import Form_Tables from './Tables/Tables'
import Joinus_table from './Tables/joinus_table'
import Charts from './Charts/Charts'
import Card from './Cards/cards'
import './layout.css'
import axios from "axios";


const DefaultLayout = () => {
    const url = 'https://kojaii.herokuapp.com/api/get-admin-data'
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url).then(json => setData(json.data))
    }, [])



     //   let username = Cookies.get('username');
     //   if (typeof username === 'undefined'){
    //        this.props.history.push("/Login");
    //    }
//
    //    this.handleLogout = this.handleLogout.bind(this);
  //  }


  //  showSettings(event) {
   //     event.preventDefault();

   // }


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
                        <Form_Tables/>
                    </div>

                    <div className="joinus_table">
                        <Joinus_table   data ={data} />

                    </div>


                </div>


            </>
        );

}

export default DefaultLayout;