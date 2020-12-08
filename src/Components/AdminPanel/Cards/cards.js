import React, { Component } from 'react';
import {  Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
import  'react-chartjs-2';
import {Line,Bar,} from "react-chartjs-2";
import './cards.css'

const makeSocialBoxData = (dataSetNo) => {
    const socialBoxData = [
        { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
        { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
        { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
        { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
    ];

    const dataset = socialBoxData[dataSetNo];
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
function  Cards ({groupnumber  ,  usernumber}){
    console.log(groupnumber)
    console.log(usernumber)
        return (
            <div className="animated fadeIn card-container">

                <Row>
                    <Col xs="12" sm="6" md="4">
                        <Card className="text-white bg-primary cards-self">
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
                        <Card className="text-white bg-success cards-self">
                            <CardHeader className="cards-headers">
                               تعداد کاربر
                            </CardHeader>
                            <CardBody>
                                {usernumber}

                            </CardBody>
                        </Card>
                    </Col>


                    <Col xs="12" sm="6" md="4">
                        <Card className="text-white bg-info cards-self">
                            <CardHeader className="cards-headers">
                                تعداد ایونت ها
                            </CardHeader>
                            <CardBody>
                                {groupnumber}

                            </CardBody>
                        </Card>
                    </Col>


                </Row>
            </div>
        );

}

export default Cards;
