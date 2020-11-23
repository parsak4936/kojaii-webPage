import React, {Component, useState} from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import $ from "jquery";
import Admin from '../AdminPanel'
import {Redirect} from "react-router-dom";




class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '', password: ''
        };
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
        if(Username==='op' && Password==='9@'){
            alert('gg')
           return <Redirect to="/Admin" />;
        }if(Username==='' && Password===''){
            alert("Fields are required");
        }else {
            alert("password or username is false!")
        }
        event.preventDefault();
    }


    render() {
        return (

            <div className="app flex-row align-items-center ">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <Form  onSubmit={this.handlesubmit}>
                                            <center>
                                                <h1  >Login</h1>
                                            </center>
                                            <center>
                                                <p className="   text-muted">Sign In to your account</p>

                                            </center>

                                            <InputGroup className="mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className=" icon-user"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" id="UserName" placeholder="Username"   onChange={this.handleChange} />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-lock"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="password"  id="PassWord" placeholder="Password"     onChange={this.handleChange}/>
                                            </InputGroup>

                                            <Row >

                                                    <Col xs="6" >
                                                        <Button color="primary" className="px-4">Login</Button>
                                                    </Col>



                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>

                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default   Login;
