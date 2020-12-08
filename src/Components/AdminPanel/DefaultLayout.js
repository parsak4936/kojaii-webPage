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
const json_to_string = JSON.stringify(data);
console.log(json_to_string)
    const Joinus_data = JSON.parse(json_to_string)
    //joinus object
console.log(Joinus_data.join_us)
    console.log(Joinus_data.supports)
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
                        <Form_Tables  data ={Joinus_data.supports}/>
                    </div>

                    <div className="joinus_table">
                        <Joinus_table   data ={Joinus_data.join_us} />

                    </div>


                </div>


            </>
        );

}

export default DefaultLayout;