import React, {Component} from 'react';
import Form_Tables from './Tables/Tables'
import Joinus_table from './Tables/joinus_table'
import Charts from './Charts/Charts'
import Card from './Cards/cards'
import './layout.css'
import Cookies from "js-cookie";

class DefaultLayout extends Component {
    constructor(props) {
        super(props);

        let username = Cookies.get('username');
        if (typeof username === 'undefined'){
            this.props.history.push("/Login");
        }

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {

    }

    showSettings(event) {
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
                        <Form_Tables/>
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