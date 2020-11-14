import React from 'react';
import './Support.css'
import {Tab, Row, Col, Nav, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import AbsoluteWrapper from "../AbsoluteWrapper";
import sup_img from '../Images/support.png'
import $ from "jquery";


export default class Support extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            last_name: '', first_name: '', email: '', field_text: ''
        };
        this.handleChange_report = this.handleChange_report.bind(this);
        this.handleChange_suggest = this.handleChange_suggest.bind(this);
        this.handleSubmit_report = this.handleSubmit_report.bind(this);
        this.handleSubmit_suggest = this.handleSubmit_suggest.bind(this);
    }

//TODO 4) slideshow ? (should check later)

    handleChange_report = (event) => {
        this.setState({
                [event.target.first_name]: event.target.value, [event.target.email]: event.target.value,
                [event.target.last_name]: event.target.value, [event.target.field_text]: event.target.value,
            }
        );
    }
    handleChange_suggest = (event) => {
        this.setState({
                [event.target.first_name]: event.target.value, [event.target.email]: event.target.value,
                [event.target.last_name]: event.target.value, [event.target.field_text]: event.target.value,
            }
        );
    }
    handleSubmit_suggest = (event) => {
        var first_name_suggest = $("#first_name_suggest").val();
        var last_name_suggest = $("#last_name_suggest").val();
        var email_suggest = $("#email_suggest").val();
        var field_text_suggest = $("#field_text_suggest").val();
        var type_suggest = $("#type_suggest").val();

        var request = $.ajax({
            url: 'https://kojaii.herokuapp.com/api/supports',
            type: 'POST',
            dataType: 'json',
            data: {
                first_name: first_name_suggest,
                last_name: last_name_suggest,
                email: email_suggest,
                text: field_text_suggest,
                type: type_suggest
            },
            async: false,
            complete: function(r){
                if(r.status === 200){
                    alert(first_name_suggest + last_name_suggest + ' فرم  شما با موفقیت ارسال  شد');
                }else{
                    alert(JSON.parse(r.responseText)['message']);
                }
            }
        });
        event.preventDefault();
    }

    handleSubmit_report = (event) => {
        var first_name = $("#first_name").val();
        var last_name = $("#last_name").val();
        var email = $("#email").val();
        var field_text = $("#field_text").val();
        var type = $("#type").val();

        $.ajax({
            url: 'https://kojaii.herokuapp.com/api/supports',
            type: 'POST',
            dataType: 'json',
            data: {
                first_name: first_name,
                last_name: last_name,
                email: email,
                text: field_text,
                type: type
            },
            async: false,
            complete: function(r){
                if(r.status === 200){
                    alert(first_name + last_name + ' فرم  شما با موفقیت ارسال  شد');
                }else{
                    alert(JSON.parse(r.responseText)['message']);
                }
            }
        });
        event.preventDefault();
    }

    render() {
        return (
            <>
                <AbsoluteWrapper>
                    <div className="sup-container">
                        <div className="sup-Header-container"><h3> نظرات و پیشنهادات خود را با ما درمیان بگذارید . .
                            . </h3></div>

                        <div className="sup-img-container">
                            <img src={sup_img} alt=" " className="sup-img"/>
                        </div>

                        <div className="form-container">
                            <div className="tab-wrapper">
                                <div className='container-fluid'>

                                    <div className="row">

                                        <div className="col-sm-12">

                                            <Tab.Container defaultActiveKey="report">
                                                <Row>
                                                    <Col sm={3}>

                                                        <Nav variant="pills" className="flex-column">

                                                            <Nav.Item>
                                                                <Nav.Link eventKey="report">گزارش خطا در
                                                                    برنامه </Nav.Link>
                                                            </Nav.Item>

                                                            <Nav.Item>
                                                                <Nav.Link eventKey="suggest">پیشنهادات و
                                                                    انتقادات</Nav.Link>
                                                            </Nav.Item>


                                                        </Nav>

                                                    </Col>
                                                    <Col sm={9}>
                                                        <Tab.Content>

                                                            <Tab.Pane className="parag" eventKey="report">
                                                                <Form onSubmit={this.handleSubmit_report}>
                                                                    <Form.Row>
                                                                        <Form.Group as={Col}>
                                                                            <Form.Label>نام</Form.Label>
                                                                            <Form.Control type="text"
                                                                                          name="first_name"
                                                                                          id="first_name"
                                                                                          onChange={this.handleChange_report}
                                                                                          placeholder="نام خود را وارد کنید"/>
                                                                        </Form.Group>

                                                                        <Form.Group className="familyfield-desktop"
                                                                                    as={Col}>
                                                                            <Form.Label>نام خانوادگی</Form.Label>
                                                                            <Form.Control type="text"
                                                                                          name="last_name"
                                                                                          id="last_name"
                                                                                          onChange={this.handleChange_report}
                                                                                          placeholder="نام خانوادگی  خود را وارد کنید"/>
                                                                        </Form.Group>

                                                                    </Form.Row>

                                                                    <Form.Group>
                                                                        <Form.Label>ایمیل</Form.Label>
                                                                        <Form.Control type="email"
                                                                                      name="email" id="email"
                                                                                      onChange={this.handleChange_report}
                                                                                      placeholder="ایمیل خود را وارد کنید"/>
                                                                    </Form.Group>

                                                                    <Form.Group>
                                                                        <Form.Label>گزارش خطا</Form.Label>
                                                                        <Form.Control type="input"
                                                                                      name="field_text" id="field_text"
                                                                                      onChange={this.handleChange_report}
                                                                                      placeholder="متن"/>
                                                                    </Form.Group>

                                                                    <Form.Row className="hidden">
                                                                        <Form.Group as={Col}>
                                                                            <Form.Control
                                                                                type="hidden"
                                                                                id="type"
                                                                                value="1"
                                                                            />
                                                                        </Form.Group>

                                                                        <Form.Group as={Col}>

                                                                            <Form.Control disabled>
                                                                            </Form.Control>
                                                                        </Form.Group>

                                                                        <Form.Group as={Col} disabled>
                                                                            <Form.Control disabled/>
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                    <Button className="btn-accept" variant="primary"
                                                                            type="submit">
                                                                        تایید و ارسال
                                                                    </Button>
                                                                </Form>

                                                            </Tab.Pane>


                                                            <Tab.Pane className="parag" eventKey="suggest">
                                                                <Form onSubmit={this.handleSubmit_suggest}>
                                                                    <Form.Row>
                                                                        <Form.Group as={Col}>
                                                                            <Form.Label>نام</Form.Label>
                                                                            <Form.Control type="text"
                                                                                          name="first_name_suggest"
                                                                                          id="first_name_suggest"
                                                                                          onChange={this.handleChange_suggest}
                                                                                          placeholder="نام خود را وارد کنید"/>
                                                                        </Form.Group>

                                                                        <Form.Group className="familyfield-desktop"
                                                                                    as={Col}>
                                                                            <Form.Label> نام خانوادگی </Form.Label>
                                                                            <Form.Control type="text"
                                                                                          name="last_name_suggest"
                                                                                          id="last_name_suggest"
                                                                                          onChange={this.handleChange_suggest}
                                                                                          placeholder="نام خانوادگی  خود را وارد کنید"/>
                                                                        </Form.Group>

                                                                    </Form.Row>


                                                                    <Form.Group>
                                                                        <Form.Label>ایمیل</Form.Label>
                                                                        <Form.Control type="email"
                                                                                      name="email_suggest"
                                                                                      id="email_suggest"
                                                                                      onChange={this.handleChange_suggest}
                                                                                      placeholder="ایمیل خود را وارد کنید"/>
                                                                    </Form.Group>
                                                                    <Form.Group>
                                                                        <Form.Label>پیشنهاد و انتقاد</Form.Label>
                                                                        <Form.Control type="input"
                                                                                      name="field_text_suggest"
                                                                                      id="field_text_suggest"
                                                                                      onChange={this.handleChange_suggest}
                                                                                      placeholder="متن"/>
                                                                    </Form.Group>

                                                                    <Form.Row className="hidden">
                                                                        <Form.Group as={Col}>
                                                                            <Form.Control
                                                                                type="hidden"
                                                                                id="type_suggest"
                                                                                value="2"
                                                                                disabled/>
                                                                        </Form.Group>

                                                                        <Form.Group as={Col}>

                                                                            <Form.Control disabled>
                                                                            </Form.Control>
                                                                        </Form.Group>

                                                                        <Form.Group as={Col} disabled>
                                                                            <Form.Control disabled/>
                                                                        </Form.Group>
                                                                    </Form.Row>


                                                                    <Button className="btn-accept" variant="primary"
                                                                            type="submit">
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
}

