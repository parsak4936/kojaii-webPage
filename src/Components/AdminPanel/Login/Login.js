import React, {useState} from 'react';
import { Button, Card, CardBody, CardGroup, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import {Redirect} from "react-router-dom";
import $ from "jquery";
import { useCookies } from 'react-cookie';
import './Login.css'
import login_img from '../../Images/login.png'
const Login   = props => {

    const [username, setName] = useState("");
    const [password, setPass] = useState("");
    const [cookies, setCookie] = useCookies(['username','password']);
    const handleSubmit = (evt) => {
        $.ajax({
            url: 'https://kojaii.herokuapp.com/api/web-login',
            type: 'POST',
            dataType: 'json',
            data: {
                "username": username,
                "password": password
            }, async: false,
            complete: function(r){
                if(r.status === 200){
                   const usernamecook = setCookie('usernameCookie', {username}, { path: '/' });
                  const passwordcook =  setCookie('PassWordCookie', {password}, { path: '/' });
                    props.handleLogin(evt);
                } else(
                    alert("نام کاربری یا نام اشتباه است")
                )
            }
        });
    }

    if (props.user === "true"){
     return (
         <Redirect from='/login' to={
             {
                 pathname: '/admin',
                 state: {
                     from: props.location
                 }
             }
         }
         />
     )
    }



        return (
            <center>
                <div className="login-wrap">
                    <div classname="login_image">
                        <img src={login_img} style={{width:"100%"}}/>
                    </div>
                    <div className="login-container">
                        <div style={{marginTop: "40px"}} className="loginForm" >
                            <Container>
                                <CardGroup className="carding" style={{width: "100%"}}>
                                    <Card className="p-4" style={{borderRadius: "10px"}}>
                                        <CardBody >
                                            <Form onSubmit={handleSubmit}  >
                                                <center>
                                                    <h2  >ورود به پنل</h2>
                                                </center>
                                                <br/>

                                                <InputGroup className="mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className=" icon-user"> </i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input type="text" id="UserName" placeholder="نام کاربری"     onChange={e => setName(e.target.value)} />
                                                </InputGroup>

                                                <InputGroup className="mb-4">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="icon-lock"> </i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input type="password"  id="PassWord" placeholder="رمز عبور"   onChange={e => setPass(e.target.value)}  />
                                                </InputGroup>

                                                <center>
                                                    <span className="span" style={{color:"red",display:"none"}}>رمز عبور یا نام کاربری اشتباه است</span>
                                                    <br/>
                                                    <Button color="primary" className="px-4"  >ورود</Button>
                                                </center>
                                                <br/>
                                            </Form>
                                        </CardBody>
                                    </Card>

                                </CardGroup>
                            </Container>
                        </div>
                    </div>

                </div>
            </center>
        );

}

export default Login;