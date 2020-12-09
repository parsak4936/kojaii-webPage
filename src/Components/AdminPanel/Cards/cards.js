import React, { Component } from 'react';
import {  Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
import  'react-chartjs-2';
import {Line,Bar,} from "react-chartjs-2";
import './cards.css'
import numbers from '../../Images/Bazar.png'

const makeSocialBoxData = (Permonth) => {
    if (typeof Permonth !== 'undefined'){
        const socialBoxData = [
            { data: [Permonth['1'],Permonth['2'] ,Permonth['3'],Permonth['4'],Permonth['5'],Permonth['6'],Permonth['7'],
                    Permonth['8'], Permonth['9'], Permonth['10'], Permonth['11'], Permonth['12']], label: 'کاربر' },
        ];

        const dataset = socialBoxData[0];
        const data = {
            labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان','آذر','دی','بهمن','اسفند' ],
            datasets: [
                {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: dataset.data,
                    label: dataset.label,
                },
            ],
        };
        return () => data;
    }
};

const socialChartOpts = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                display: false,
            }],
        yAxes: [
            {
                display: false,
            }],
    },
    elements: {
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
        },
    },
};
function  Cards_plot ({groupnumber  ,  usernumber , userPermonth}){
    // console.log(userPermonth)
        return (
            <div className="animated fadeIn card-container">

                <Row>
                    <Col xs="12" sm="6" md="4">
                        <Card className="text-white bg-primary cards-self card1">
                            <CardHeader className="cards-headers">
                               نا مشخص
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

                            </CardBody>
                        </Card>
                    </Col>


                    <Col xs="12" sm="6" md="4">
                        <Card className="text-white bg-success cards-self card2">
                            <CardHeader className="cards-headers">
                               تعداد کاربر
                            </CardHeader>
                            <CardBody>
                                <img src={numbers} style={{width:"100%"}}/>
                                <div className="container">
                                    <div className="grid-container">
                                        <div className="grid-item">کاربر</div>
                                        <div className="grid-item2">قرار</div>
                                        <div className="grid-item">{usernumber}</div>
                                        <div className="grid-item2">{groupnumber}</div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>


                    <Col xs="12" sm="6" md="4">
                        <Card className="text-white bg-info cards-self card3">
                            <CardHeader className="cards-headers">
تعداد کاربر های جدید                            </CardHeader>
                            <CardBody>
                                <div className="chart-wrapper">
                                    <Line data={makeSocialBoxData(userPermonth)} options={socialChartOpts} height={90}  />
                                </div>

                            </CardBody>
                        </Card>
                    </Col>


                </Row>
            </div>
        );

}

export default Cards_plot;
