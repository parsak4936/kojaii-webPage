import React, {Component, useState} from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import $ from "jquery";
import Admin from '../AdminPanel'
import {Redirect} from "react-router-dom";
import Cookies from 'js-cookie';




class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '', password: ''
        };

        let username = Cookies.get('username');
        if (typeof username !== 'undefined'){
            this.props.history.push("/Admin");
        }

        this.handleChange = this.handleChange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
                [event.target.first_name]: event.target.value, [event.target.email]: event.target.value,
                [event.target.last_name]: event.target.value, [event.target.field_text]: event.target.value,
            }
        );
        console.log('as')

    }
    handlesubmit = (event) => {
        var Username = $("#UserName").val();
        var Password = $("#PassWord").val();

        let passing = false;

        $.ajax({
            url: 'https://kojaii.herokuapp.com/api/web-login',
            type: 'POST',
            dataType: 'json',
            data: {
                username: Username,
                password: Password
            },
            async: false,
            complete: function(r){
                if(r.status === 200){
                    passing = true
                }
            }
        });


        if(passing){
            Cookies.set('username','amirhosein');
            this.props.history.push("Admin");
        }else if(Username===''){
            $("#UserName").css("border", "1px solid red");
        }else if(Password===''){
            $("#PassWord").css("border", "1px solid red");
        }else {
            $(".span").css("display", "block");
        }
        event.preventDefault();
    }


    render() {
        return (
            <center>
                <div style={{marginTop: "40px"}} className="app flex-row align-items-center">
                    <Container>
                        <CardGroup className="carding" style={{width: "90%"}}>
                            <Card className="p-4" style={{borderRadius: "10px"}}>
                                <CardBody >
                                    <Form onSubmit={this.handlesubmit}>
                                        <center>
                                            <h2  >ورود به پنل</h2>
                                        </center>
                                        <br/>

                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className=" icon-user"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="text" id="UserName" placeholder="نام کاربری"   onChange={this.handleChange} />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="password"  id="PassWord" placeholder="رمز عبور"     onChange={this.handleChange}/>
                                        </InputGroup>

                                        <center>
                                            <span className="span" style={{color:"red",display:"none"}}>رمز عبور یا نام کاربری اشتباه است</span>
                                        </center>
                                        <br/>
                                        <Row >
                                            <Col xs="6" >
                                                <Button color="primary" className="px-4">ورود</Button>
                                            </Col>



                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>

                        </CardGroup>
                    </Container>
                </div>
            </center>
        );
    }
}

export default Login;