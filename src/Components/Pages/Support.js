import React, {Component} from 'react';
import './Support.css'
import {Tabs, Tab, Row, Col, Nav, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import AbsoluteWrapper from "../AbsoluteWrapper";
import  sup_img from '../Images/support.png'

function Support() {

    return(
        <>
        <AbsoluteWrapper>
<div className="sup-container">
    <div className="sup-Header-container"><h3> نظرات و پیشنهادات خود را با ما درمیان بگذارید . . . </h3></div>

    <div className="sup-img-container">
    <img src={sup_img} alt= " " className="sup-img"/>
</div>

<div className="form-container">
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
                                                    <Form.Control type="text" placeholder="نام خود را وارد کنید" />
                                                </Form.Group>

                                                <Form.Group className="familyfield-desktop"   as={Col} controlId="formGridEmail">
                                                    <Form.Label>نام خانوادگی</Form.Label>
                                                    <Form.Control type="text" placeholder="نام خانوادگی  خود را وارد کنید" />
                                                </Form.Group>

                                            </Form.Row>
                                            <Form.Row className="familyname-mobile">
                                                <Form.Group  as={Col} controlId="formGridEmail">
                                                    <Form.Label>نام خانوادگی</Form.Label>
                                                    <Form.Control type="email" placeholder="ایمیل  خود را وارد کنید" />
                                                </Form.Group>

                                            </Form.Row>
                                            <Form.Group    controlId="formGridEmail">
                                                <Form.Label>ایمیل</Form.Label>
                                                <Form.Control type="email" placeholder="ایمیل خود را وارد کنید" />
                                            </Form.Group>

                                            <Form.Group  controlId="formGridAddress2">
                                                <Form.Label>گزارش خطا</Form.Label>
                                                <Form.Control type="input" placeholder="متن" />
                                            </Form.Group>

                                            <Form.Row className="hidden">
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
                                                    <Form.Control type="text" placeholder="نام خود را وارد کنید" />
                                                </Form.Group>

                                                <Form.Group className="familyfield-desktop" as={Col} controlId="formGridEmail">
                                                    <Form.Label> نام خانوادگی </Form.Label>
                                                    <Form.Control type="email" placeholder="نام خانوادگی  خود را وارد کنید" />
                                                </Form.Group>

                                            </Form.Row>
                                            <Form.Row className="familyname-mobile">
                                                <Form.Group  as={Col} controlId="formGridEmail">
                                                    <Form.Label>نام خانوادگی</Form.Label>
                                                    <Form.Control type="email" placeholder="ایمیل  خود را وارد کنید" />
                                                </Form.Group>

                                            </Form.Row>

                                            <Form.Group  controlId="formGridEmail">
                                                <Form.Label>ایمیل</Form.Label>
                                                <Form.Control type="email" placeholder="ایمیل خود را وارد کنید" />
                                            </Form.Group>
                                            <Form.Group controlId="formGridAddress2">
                                                <Form.Label>پیشنهاد و انتقاد</Form.Label>
                                                <Form.Control type="input" placeholder="متن" />
                                            </Form.Group>

                                            <Form.Row className="hidden">
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

</div>



        </AbsoluteWrapper>

        </>
    )

}
export default Support;
