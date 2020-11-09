import React, {Component} from 'react';
import './Support.css'
import {Tabs, Tab, Row, Col, Nav, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import AbsoluteWrapper from "../AbsoluteWrapper";


function Support() {

    return(
        <>
        <AbsoluteWrapper>
<div className="sup-container">

    <div className="tab-wrapper">
        <div className='container-fluid' >
            <div className="row">

                <div className="col-sm-12">

                    <Tab.Container defaultActiveKey="profile">
                        <Row>
                            <Col sm={3}>

                                <Nav variant="pills" className="flex-column">

                                    <Nav.Item>
                                        <Nav.Link eventKey="home">گزارش خطا در برنامه </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="profile">پیشنهادات و انتقادات</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="contact"> </Nav.Link>
                                    </Nav.Item>

                                </Nav>

                            </Col>
                            <Col sm={9}>
                                <Tab.Content>

                                    <Tab.Pane className="parag" eventKey="home">
                                        <Form>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                </Form.Group>


                                            </Form.Row>

                                            <Form.Group controlId="formGridAddress1">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" />
                                            </Form.Group>

                                            <Form.Group controlId="formGridAddress2">
                                                <Form.Label>Address 2</Form.Label>
                                                <Form.Control placeholder="Apartment, studio, or floor" />
                                            </Form.Group>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>State</Form.Label>
                                                    <Form.Control as="select" defaultValue="Choose...">
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </Form.Control>
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridZip">
                                                    <Form.Label>Zip</Form.Label>
                                                    <Form.Control />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Group id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>

                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </Form>

                                    </Tab.Pane>

                                    <Tab.Pane className="parag" eventKey="profile">
                                        <Form>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                </Form.Group>


                                            </Form.Row>

                                            <Form.Group controlId="formGridAddress1">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" />
                                            </Form.Group>

                                            <Form.Group controlId="formGridAddress2">
                                                <Form.Label>Address 2</Form.Label>
                                                <Form.Control placeholder="Apartment, studio, or floor" />
                                            </Form.Group>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>State</Form.Label>
                                                    <Form.Control as="select" defaultValue="Choose...">
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </Form.Control>
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridZip">
                                                    <Form.Label>Zip</Form.Label>
                                                    <Form.Control />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Group id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>

                                            <Button variant="primary" type="submit">
                                                Submit
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
