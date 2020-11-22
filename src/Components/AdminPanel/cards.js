import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import  'react-chartjs-2';
import {Line} from "react-chartjs-2";
import Widget03 from "./Widget3";

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
class Cards extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState }});
    }

    render() {
        return (
            <div className="animated fadeIn">

                <Row>
                    <Col xs="12" sm="6" md="4">
                        <div className="animated fadeIn">

                                    <Widget03 dataBox={() => ({ variant: 'facebook', friends: '89k', feeds: '459' })} >
                                        <div className="chart-wrapper">
                                            <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={190} />
                                        </div>
                                    </Widget03>




                        </div>
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <Card className="text-white bg-success">
                            <CardHeader>
                                Card title
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                <div className="chart-wrapper">
                                    <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <Card className="text-white bg-info">
                            <CardHeader>
                                Card title
                            </CardHeader>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                <div className="chart-wrapper">
                                    <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>


                </Row>
            </div>
        );
    }
}

export default Cards;
