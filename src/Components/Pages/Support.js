import './Support.css'
import sup_img from '../Images/Support.svg'
import bug_img from '../Images/bugrepo.png'
import $ from "jquery";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    formStyle: {
        "& > *": {
            margin: theme.spacing(1)
        }
    },
    direction: 'rtl',
}));

export default function CenteredTabs() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);



    const [firstname, setfirstName] = React.useState("");
    const [lastname, setlastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [text, setText] = React.useState("");


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleSubmit = (evt) => {
        evt.preventDefault();
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (firstname == "" || lastname == "" || email == "" || text == ""){
            $('#error').css('display', 'block');
            $("#error").html('لطفا تمام فیلد ستاره دار را تکمیل فرمایید');
        }else if(!email.match(re)){
            $('#error').css('display', 'block');
            $("#error").html('لطفا ایمیل را صحیح وارد بفرمایید');
        }else {
            $.ajax({
                url: 'https://kojaii.herokuapp.com/api/supports',
                type: 'POST',
                dataType: 'json',
                data: {
                    first_name: firstname,
                    last_name: lastname,
                    email: email,
                    text: text,
                    type: parseInt(value)
                },
                async: false,
                complete: function (r) {
                    if (r.status === 200) {
                        $('#error').css('display', 'block');
                        $('#error').css('color', 'green');
                        $("#error").html('پیام شما با موفقیت ثبت شد با تشکر از شما');
                    } else {
                        alert(JSON.parse(r.responseText)['message']);
                    }
                }
            });
        }


    }

    return (
        <>
            <center>
                <div dir="rtl">
                    <Paper className="card" elevation={3}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab style={{outline: "none"}} label="گزارش خطا برنامه" {...a11yProps(0)} />
                            <Tab style={{outline: "none"}} label="انتقادات و پیشنهادات" {...a11yProps(1)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <img className="images" src={bug_img} style={{float: "left"}}/>
                            <form dir="rtl" className={classes.formStyle} noValidate autoComplete="off">

                                <TextField
                                    className="names first_name"
                                    id="standard-basic"
                                    label="نام"
                                    value={firstname}
                                    onChange={e => setfirstName(e.target.value)}
                                    required
                                />
                                <TextField
                                    className="names last_name"
                                    id="standard-basic"
                                    label="نام خانوادگی"
                                    value={lastname}
                                    onChange={e => setlastName(e.target.value)}
                                    required/>
                                <br/>
                                <TextField
                                    className="fields email"
                                    type="email"
                                    id="standard-basic"
                                    label="ایمیل"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                <br/>
                                <TextField
                                    className="fields field_text"
                                    label="گزارش خطا"
                                    multiline
                                    rows={2}
                                    rowsMax={4}
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    required
                                />
                                <input id="kind_value" type="hidden" value="1"/>
                            </form>
                            <br/>
                            <span style={{color:"red",display:"none"}} id="error"></span>
                            <br/>
                            <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
                                تایید و ارسال
                            </Button>

                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <img className="images" src={sup_img} style={{float: "left"}}/>
                            <form dir="rtl" className={classes.formStyle} noValidate autoComplete="off">

                                <TextField
                                    className="names first_name"
                                    id="standard-basic"
                                    label="نام"
                                    value={firstname}
                                    onChange={e => setfirstName(e.target.value)}
                                    required
                                />
                                <TextField
                                    className="names last_name"
                                    id="standard-basic"
                                    label="نام خانوادگی"
                                    value={lastname}
                                    onChange={e => setlastName(e.target.value)}
                                    required/>
                                <br/>
                                <TextField
                                    className="fields email"
                                    type="email"
                                    id="standard-basic"
                                    label="ایمیل"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                <br/>
                                <TextField
                                    className="fields field_text"
                                    label="گزارش خطا"
                                    multiline
                                    rows={2}
                                    rowsMax={4}
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    required
                                />
                                <input id="kind_value" type="hidden" value="1"/>
                            </form>
                            <br/>
                            <span style={{color:"red",display:"none"}} id="error"></span>
                            <br/>
                            <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
                                تایید و ارسال
                            </Button>
                        </TabPanel>
                    </Paper>
                </div>
            </center>
        </>
    );
}

