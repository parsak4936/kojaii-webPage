// import React from 'react';
import './Support.css'
// import {Tab, Row, Col, Nav, Form} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from "react-bootstrap/Button";
import sup_img from '../Images/Support.svg'
import bug_img from '../Images/bugrepo.png'
import $ from "jquery";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                            <Tab style={{outline:"none"}} label="گزارش خطا برنامه" {...a11yProps(0)} />
                            <Tab style={{outline:"none"}} label="انتقادات و پیشنهادات" {...a11yProps(1)} />
                        </Tabs>
                        <TabPanel  value={value} index={0}>
                            <img className="images" src={bug_img} style={{float :"left"}}/>
                            <form dir="rtl" className={classes.formStyle} noValidate autoComplete="off">

                                <TextField dir="rtl" className="names" id="standard-basic" label="نام" placeholder="" required/>
                                <TextField className="names" id="standard-basic" label="نام خانوادگی" required/>
                                <br/>
                                <TextField
                                    className="fields"
                                    type="email"
                                    id="standard-basic"
                                    label="ایمیل"
                                    required
                                />
                                <br/>
                                <TextField
                                    className="fields"
                                    label="گزارش خطا"
                                    multiline
                                    rows={2}
                                    rowsMax={4}
                                    required
                                />
                            </form>
                            <div className="submit-btn">
                                <Button type="submit" variant="contained" color="primary">
                                    تایید و ارسال
                                </Button>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <img className="images" src={sup_img} style={{float :"left"}}/>
                            <form dir="rtl" className={classes.formStyle} noValidate autoComplete="off">

                                <TextField dir="rtl" className="names" id="standard-basic" label="نام" placeholder="" required />

                                <TextField className="names" id="standard-basic" label="نام خانوادگی" required />
                                <br/>
                                <TextField
                                    className="fields"
                                    type="email"
                                    id="standard-basic"
                                    label="ایمیل"
                                    required
                                />
                                <br/>
                                <TextField
                                    className="fields"
                                    label="گزارش خطا"
                                    multiline
                                    rows={2}
                                    rowsMax={4}
                                    required
                                />
                            </form>
                            <Button type="submit" variant="contained" color="primary">
                                تایید و ارسال
                            </Button>
                            <div className="submit-btn">
                                <Button type="submit" variant="contained" color="primary">
                                    تایید و ارسال
                                </Button>
                            </div>
                        </TabPanel>
                    </Paper>
                </div>
            </center>
        </>
    );
}


// export default class Support extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             last_name: '', first_name: '', email: '', field_text: ''
//         };
//         this.handleChange_report = this.handleChange_report.bind(this);
//         this.handleChange_suggest = this.handleChange_suggest.bind(this);
//         this.handleSubmit_report = this.handleSubmit_report.bind(this);
//         this.handleSubmit_suggest = this.handleSubmit_suggest.bind(this);
//     }
//
// //TODO 4) slideshow ? (should check later)
//
//     handleChange_report = (event) => {
//         this.setState({
//                 [event.target.first_name]: event.target.value, [event.target.email]: event.target.value,
//                 [event.target.last_name]: event.target.value, [event.target.field_text]: event.target.value,
//             }
//         );
//         console.log('as')
//     }
//     handleChange_suggest = (event) => {
//         this.setState({
//                 [event.target.first_name]: event.target.value, [event.target.email]: event.target.value,
//                 [event.target.last_name]: event.target.value, [event.target.field_text]: event.target.value,
//             }
//         );
//         console.log('asd')
//     }
//     handleSubmit_suggest = (event) => {
//         var first_name_suggest = $("#first_name_suggest").val();
//         var last_name_suggest = $("#last_name_suggest").val();
//         var email_suggest = $("#email_suggest").val();
//         var field_text_suggest = $("#field_text_suggest").val();
//         var type_suggest = $("#type_suggest").val();
//
//         var request = $.ajax({
//             url: 'https://kojaii.herokuapp.com/api/supports',
//             type: 'POST',
//             dataType: 'json',
//             data: {
//                 first_name: first_name_suggest,
//                 last_name: last_name_suggest,
//                 email: email_suggest,
//                 text: field_text_suggest,
//                 type: type_suggest
//             },
//             async: false,
//             complete: function(r){
//                 if(r.status === 200){
//                     alert( ' درخواست  شما با موفقیت ارسال  شد');
//                 }else{
//                     alert(JSON.parse(r.responseText)['message']);
//                 }
//             }
//         });
//         event.preventDefault();
//     }
//
//     handleSubmit_report = (event) => {
//         var first_name = $("#first_name").val();
//         var last_name = $("#last_name").val();
//         var email = $("#email").val();
//         var field_text = $("#field_text").val();
//         var type = $("#type").val();
//
//         $.ajax({
//             url: 'https://kojaii.herokuapp.com/api/supports',
//             type: 'POST',
//             dataType: 'json',
//             data: {
//                 first_name: first_name,
//                 last_name: last_name,
//                 email: email,
//                 text: field_text,
//                 type: type
//             },
//             async: false,
//             complete: function(r){
//                 if(r.status === 200){
//                     alert(first_name + last_name + ' فرم  شما با موفقیت ارسال  شد');
//                 }else{
//                     alert(JSON.parse(r.responseText)['message']);
//                 }
//             }
//         });
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <>
//                 <AbsoluteWrapper>
//                     <div >
//                         <Paper className="card" elevation={3}>
//                             <Paper className={classes.root}>
//                                 <Tabs
//                                     value={value}
//                                     onChange={handleChange}
//                                     indicatorColor="primary"
//                                     textColor="primary"
//                                     centered
//                                 >
//                                     <Tab label="گزارش خطا برنامه" {...a11yProps(0)} />
//                                     <Tab label="انتقادات و پیشنهادات" {...a11yProps(1)} />
//                                 </Tabs>
//                             </Paper>
//                             <TabPanel value={value} index={0}>
//                                 <form className={classes.formStyle} noValidate autoComplete="off">
//                                     <TextField id="standard-basic" label="نام" placeholder="" />
//                                     <TextField id="standard-basic" label="نام خانوادگی" />
//                                     <TextField
//                                         style={{ width: "100%" }}
//                                         type="email"
//                                         id="standard-basic"
//                                         label="ایمیل"
//                                     />
//                                     <TextField
//                                         label="گزارش خطا"
//                                         style={{ width: "100%" }}
//                                         multiline
//                                         rows={2}
//                                         rowsMax={4}
//                                     />
//                                 </form>
//                                 <div className="submit-btn">
//                                     <Button variant="contained" color="primary">
//                                         تایید و ارسال
//                                     </Button>
//                                 </div>
//                             </TabPanel>
//                             <TabPanel value={value} index={1}>
//                                 Item Two
//                             </TabPanel>
//                         </Paper>
//                     </div>
//                 </AbsoluteWrapper>
//
//             </>
//         )
//     }
// }

