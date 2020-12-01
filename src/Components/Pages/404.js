import React from 'react';
import './Support.css'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import './404.css'
import {Link} from "react-router-dom";

export default class Support extends React.Component {

    render() {
        return (
            <>
                <body>
                <section id="not-found" className="errorpage_container">
                    <div id="title">Simple Pure CSS3 &bull; 404 خطای </div>
                    <div className="circles">
                        <p>404<br></br>
                            <small>این صفحه وجود ندارد</small>
                        </p>
                        <span className="circle big"> </span>
                        <span className="circle med"> </span>
                        <span className="circle small"> </span>
                    </div>
                </section>
                </body>

            </>
        )
    }
}

