import React, {Component} from 'react';
import './Support.css'
import CoolTabs from 'react-cool-tabs';

class Content1 extends Component {
    render() {
        return <div  >
            this is Content1
        </div>
    }
}
class Content2 extends Component {
    render() {
        return <div  >
            this is Content2
        </div>
    }
}

function Support() {

    return(
        <>
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




        </>
    )

}
export default Support;
