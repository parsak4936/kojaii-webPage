import React, {Component, useEffect, useState} from 'react';
import Form_Tables from './Tables/Tables'
import Joinus_table from './Tables/joinus_table'
import Charts from './Charts/Charts'
import Cards_plot from './Cards/cards'
import './layout.css'
import axios from "axios";


const DefaultLayout = () => {
    const url = 'https://kojaii.herokuapp.com/api/get-admin-data'
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url).then(json => setData(json.data))
    }, [])
    const json_to_string = JSON.stringify(data);
    // console.log(json_to_string)
    const API_data = JSON.parse(json_to_string)


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
                    <Cards_plot groupnumber={API_data.group_number} usernumber={API_data.users_number} userPermonth={API_data.join_user_perMonth}/>
                </div>


                <div className="form_table" style={{padding:"50px"}}>
                    <Form_Tables data={API_data.supports}/>
                </div>

                <div className="joinus_table">
                    <Joinus_table data={API_data.join_us}/>

                </div>


            </div>


        </>
    );

}

export default DefaultLayout;