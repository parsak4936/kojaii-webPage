import React, {Component} from 'react';
import './Support.css'
import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//import CoolTabs from 'react-cool-tabs';

//class Content1 extends Component {
   // render() {
      //  return <div  >
        //    this is Content1
     //   </div>
   // }
//}
//class Content2 extends Component {
   // render() {
     //   return <div  >
      //      this is Content2
     //   </div>
 //   }
//}

function Support() {

    return(
        <>
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
                                        <h5>Home Dashbord</h5>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                                    </Tab.Pane>

                                    <Tab.Pane className="parag" eventKey="profile">
                                        <h5>Profile Details</h5>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="contact">
                                        <h5>Contact Info</h5>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
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

            {/*-----------------
<div className="sup-container">
    <div className="tabs">
        <div className="tab-lists">
            <div className= "tab-list" >
                <CoolTabs
                    tabKey={'1'}
                    style={{ width:  500, height:  500, background:  '#E9F9FE' }}
                    activeTabStyle={{ background:  'red', color:  'white' , borderRadius:'10px'}}
                    unActiveTabStyle={{  background:  'green', color:  'black', borderRadius:'10px' }}
                    activeLeftTabBorderBottomStyle={{ background:  'blue', height:  4 , width:4}}
                    activeRightTabBorderBottomStyle={{ background:  'yellow', height:  4 }}
                    tabsBorderBottomStyle={{ background:  'orange', height:  4, borderRadius:'10px' }}
                    leftContentStyle={{ background:  'lightgreen', borderRadius:'10px' }}
                    rightContentStyle={{ background:  'lightblue' , borderRadius:'10px'}}
                    leftTabTitle={'گزارش خطا در برنامه '}
                    rightTabTitle={'پیشنهادات و انتقادات'}
                    leftContent={<Content1/>}
                    rightContent={<Content2/>}
                    contentTransitionStyle={'transform 0.6s ease-in'}
                    borderTransitionStyle={'all 0.6s ease-in'}/>

            </div>

        </div>

    </div>

</div>

                  ---------------*/}



        </>
    )

}
export default Support;
