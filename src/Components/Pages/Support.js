import React, {Component} from 'react';
import './Support.css'
import {Tabs, Tab, Row, Col, Nav, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import AbsoluteWrapper from "../AbsoluteWrapper";
import  sup_img from '../Images/support.jpg'

function Support() {

    return(
        <>
        <AbsoluteWrapper>
<div className="sup-container">
    <img src={sup_img} alt= " " width="400px" className="sup-img"/>
    <div className="tab-wrapper">
        <div className='container-fluid' >


            <div className="row">

                <div className="col-sm-12">

                    <Tab.Container defaultActiveKey="report">
                        <Row>
                            <Col sm={3}>

                                <Nav variant="pills" className="flex-column">

                                    <Nav.Item>
                                        <Nav.Link eventKey="report">گزارش خطا در برنامه </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="suggest">پیشنهادات و انتقادات</Nav.Link>
                                    </Nav.Item>



                                </Nav>

                            </Col>
                            <Col sm={9}>
                                <Tab.Content>

                                    <Tab.Pane className="parag" eventKey="report">
                                        <Form>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label>نام</Form.Label>
                                                    <Form.Control type="email" placeholder="نام خود را وارد کنید" />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label>نام</Form.Label>
                                                    <Form.Control type="email" placeholder="نام خانوادگی  خود را وارد کنید" />
                                                </Form.Group>

                                            </Form.Row>

                                            <Form.Group controlId="formGridAddress1">
                                                <Form.Label>ایمیل</Form.Label>
                                                <Form.Control placeholder="*******@gmail.com" />
                                            </Form.Group>

                                            <Form.Group controlId="formGridAddress2">
                                                <Form.Label>تلفن همراه</Form.Label>
                                                <Form.Control placeholder="02833669553" />
                                            </Form.Group>

                                            <Form.Row>
                                                <Form.Group  as={Col} >

                                                    <Form.Control disabled />
                                                </Form.Group>

                                                <Form.Group as={Col} >

                                                    <Form.Control disabled>
                                                    </Form.Control>
                                                </Form.Group>

                                                <Form.Group as={Col}  disabled >
                                                    <Form.Control disabled />
                                                </Form.Group>
                                            </Form.Row>



                                            <Button  className="btn-accept"  variant="primary" type="submit">
                                                تایید و ارسال
                                            </Button>
                                        </Form>

                                    </Tab.Pane>

                                    <Tab.Pane className="parag" eventKey="suggest">
                                        <Form>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label>نام</Form.Label>
                                                    <Form.Control type="email" placeholder="نام خود را وارد کنید" />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label>نام</Form.Label>
                                                    <Form.Control type="email" placeholder="نام خانوادگی  خود را وارد کنید" />
                                                </Form.Group>

                                            </Form.Row>

                                            <Form.Group controlId="formGridAddress1">
                                                <Form.Label>ایمیل</Form.Label>
                                                <Form.Control placeholder="*******@gmail.com" />
                                            </Form.Group>

                                            <Form.Group controlId="formGridAddress2">
                                                <Form.Label>تلفن همراه</Form.Label>
                                                <Form.Control placeholder="02833669553" />
                                            </Form.Group>

                                            <Form.Row>
                                                <Form.Group  as={Col} >

                                                    <Form.Control disabled />
                                                </Form.Group>

                                                <Form.Group as={Col} >

                                                    <Form.Control disabled>
                                                    </Form.Control>
                                                </Form.Group>

                                                <Form.Group as={Col}  disabled >
                                                    <Form.Control disabled />
                                                </Form.Group>
                                            </Form.Row>



                                            <Button  className="btn-accept"  variant="primary" type="submit">
                                                تایید و ارسال
                                            </Button>
                                        </Form>

                                    </Tab.Pane>

                                    <Tab.Pane eventKey="contact">

                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>





                </div>
            </div>
        </div>
    </div>
</div>



        </AbsoluteWrapper>

        </>
    )

}
export default Support;
