import React from 'react';
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import AbsoluteWrapper from "../../../Components/AbsoluteWrapper";
import Interduce from './Containers/InterduceSection/interduce'
import Tutorial from './Containers/ToturialSection/Toturial'
import JoinUs from './Containers/JoinUsSection/JoinUs'

export default function MainPage (){
        return (
            <>
            <AbsoluteWrapper>
                <div className="mainpage-container">
                     <Interduce/>
                     <Tutorial/>
                     <JoinUs/>
                </div>

            </AbsoluteWrapper>
            </>
        );



}


