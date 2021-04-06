import React, { useEffect, useState} from 'react';
import FormTables from './Tables/Tables'
import Joinustable from './Tables/joinus_table'
import Cardsplot from './Cards/cards'
import './layout.css'
import axios from "axios";


const DefaultLayout = () => {
    const url = 'https://kojaii.herokuapp.com/api/get-admin-data'
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url).then(json => setData(json.data))
    }, [])
    const json_to_string = JSON.stringify(data)
    const API_data = JSON.parse(json_to_string)


    //   let username = Cookies.get('username');


    return (
        <>
            <center>
                <h1 className="alert-in-mobile-verion">    لطفا با دسکتاپ وارد شوید تا به پنل ادمین دسترسی داشته باشید</h1>

            </center>
            <div className="AdminContainer">
                <div className="cards">
                    <Cardsplot groupnumber={API_data.group_number} usernumber={API_data.users_number} userPermonth={API_data.join_user_perMonth}/>
                </div>


                <div className="form_table" style={{padding:"50px"}}>
                    <FormTables data={API_data.supports}/>
                </div>

                <div className="joinus_table">
                    <Joinustable data={API_data.join_us}/>
                </div>
            </div>


        </>
    );

}

export default DefaultLayout;