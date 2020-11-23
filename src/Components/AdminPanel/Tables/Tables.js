import React, {useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import {CBadge, CButton, CCardBody, CCollapse, CDataTable} from "@coreui/react/es";
import './tables.css'

const usersData = [
    {id: 0, نام_و_نام_خانوادگی: 'John Doe', تاریخ: '2018/01/01', ایمیل: 'Guest', status: 'Pending' ,text:'lorem'},
    {id: 1, نام_و_نام_خانوادگی: 'Samppa Nori', تاریخ: '2018/01/01', ایمیل: 'Member', status: 'پیشنهادات',text:'lorem'},
    {id: 2, نام_و_نام_خانوادگی: 'Estavan Lykos', تاریخ: '2018/02/01', ایمیل: 'Staff', status: 'خطا',text:'lorem'},
    {id: 3, نام_و_نام_خانوادگی: 'Chetan Mohamed', تاریخ: '2018/02/01', ایمیل: 'Admin', status: 'Inactive',text:'lorem'},
    {id: 4, نام_و_نام_خانوادگی: 'Derick Maximinus', تاریخ: '2018/03/01', ایمیل: 'Member', status: 'Pending',text:'lorem'},
    {id: 5, نام_و_نام_خانوادگی: 'Friderik Dávid', تاریخ: '2018/01/21', ایمیل: 'Staff', status: 'پیشنهادات',text:'lorem'},
    {id: 6, نام_و_نام_خانوادگی: 'Yiorgos Avraamu', تاریخ: '2018/01/01', ایمیل: 'Member', status: 'پیشنهادات',text:'lorem'},
    {id: 7, نام_و_نام_خانوادگی: 'Avram Tarasios', تاریخ: '2018/02/01', ایمیل: 'Staff', status: 'خطا',text:'lorem'},
    {id: 8, نام_و_نام_خانوادگی: 'Quintin Ed', تاریخ: '2018/02/01', ایمیل: 'Admin', status: 'Inactive',text:'lorem'},
    {id: 9, نام_و_نام_خانوادگی: 'Enéas Kwadwo', تاریخ: '2018/03/01', ایمیل: 'Member', status: 'Pending',text:'lorem'},
    {id: 10, نام_و_نام_خانوادگی: 'Agapetus Tadeáš', تاریخ: '2018/01/21', ایمیل: 'Staff', status: 'پیشنهادات',text:'lorem'},
    {id: 11, نام_و_نام_خانوادگی: 'Carwyn Fachtna', تاریخ: '2018/01/01', ایمیل: 'Member', status: 'پیشنهادات',text:'lorem'},
    {id: 12, نام_و_نام_خانوادگی: 'Nehemiah Tatius', تاریخ: '2018/02/01', ایمیل: 'Staff', status: 'خطا',text:'lorem'},
    {id: 13, نام_و_نام_خانوادگی: 'Ebbe Gemariah', تاریخ: '2018/02/01', ایمیل: 'Admin', status: 'Inactive',text:'lorem'},
    {id: 14, نام_و_نام_خانوادگی: 'Eustorgios Amulius', تاریخ: '2018/03/01', ایمیل: 'Member', status: 'Pending',text:'lorem'},
    {id: 15, نام_و_نام_خانوادگی: 'Leopold Gáspár', تاریخ: '2018/01/21', ایمیل: 'Staff', status: 'پیشنهادات',text:'lorem'},
    {id: 16, نام_و_نام_خانوادگی: 'Pompeius René', تاریخ: '2018/01/01', ایمیل: 'Member', status: 'پیشنهادات',text:'lorem'},
    {id: 17, نام_و_نام_خانوادگی: 'Paĉjo Jadon', تاریخ: '2018/02/01', ایمیل: 'Staff', status: 'خطا',text:'lorem'},
    {id: 18, نام_و_نام_خانوادگی: 'Micheal Mercurius', تاریخ: '2018/02/01', ایمیل: 'Admin', status: 'Inactive',text:'lorem'},
    {id: 19, نام_و_نام_خانوادگی: 'Ganesha Dubhghall', تاریخ: '2018/03/01', ایمیل: 'Member', status: 'Pending',text:'lorem'},
    {id: 20, نام_و_نام_خانوادگی: 'Hiroto Šimun', تاریخ: '2018/01/21', ایمیل: 'Staff', status: 'پیشنهادات',text:'lorem'},
    {id: 21, نام_و_نام_خانوادگی: 'Vishnu Serghei', تاریخ: '2018/01/01', ایمیل: 'Member', status: 'پیشنهادات',text:'lorem'},
    {id: 22, نام_و_نام_خانوادگی: 'Zbyněk Phoibos', تاریخ: '2018/02/01', ایمیل: 'Staff', status: 'خطا',text:'lorem'},
    {id: 23, نام_و_نام_خانوادگی: 'Aulus Agmundr', تاریخ: '2018/01/01', ایمیل: 'Member', status: 'Pending',text:'lorem'},
    {id: 42, نام_و_نام_خانوادگی: 'Ford Prefect', تاریخ: '2001/05/25', ایمیل: 'Alien', status: 'Don\'t panic!',text:'lorem'}
]

// const [items, setItems] = useState(usersData)



const fields = [
    { key: 'نام_و_نام_خانوادگی', _style: { width: '20%'} },
    'تاریخ',
    { key: 'ایمیل', _style: { width: '30%'} },
    { key: 'status', _style: { width: '10%'} },
    { key: 'text', _style: { width: '30%'} },
    {
        key: 'show_details',
        label: '',
        _style: { width: '1%' },
        sorter: false,
        filter: false
    }
]

const getBadge = (status)=>{
    switch (status) {
        case 'پیشنهادات': return 'success'
        case 'خطا': return 'danger'
        default: return 'primary'
    }
}



export default class Table1 extends React.Component {


   render() {
       return (
           <>
               <div className="tables-header"> <h1>لیست پیشنهادات و انتقادات</h1></div>
               <center>
                   <CDataTable classname="we"
                       items={usersData}
                       fields={fields}
                       columnFilter
                       tableFilter
                       footer
                       itemsPerPageSelect
                       itemsPerPage={5}
                       hover
                       sorter
                       pagination
                       scopedSlots = {{
                           'status':
                               (item)=>(
                                   <td>
                                       <CBadge color={getBadge(item.status)}>
                                           {item.status}
                                       </CBadge>
                                   </td>
                               ),
                           'show_details':
                               (item, index)=>{
                                   return (
                                       <td className="py-2">
                                           <CButton
                                               color="primary"
                                               variant="outline"
                                               shape="square"
                                               size="sm"

                                           >

                                           </CButton>
                                       </td>
                                   )
                               },
                           'details':
                               (item, index)=>{
                                   return (
                                       <CCollapse  >
                                           <CCardBody>
                                               <h4>
                                                   {item.username}
                                               </h4>
                                               <p className="text-muted">User since: {item.registered}</p>
                                               <CButton size="sm" color="info">
                                                   User Settings
                                               </CButton>
                                               <CButton size="sm" color="danger" className="ml-1">
                                                   Delete
                                               </CButton>
                                           </CCardBody>
                                       </CCollapse>
                                   )
                               }
                       }}
                   />
               </center>

           </>
       );

   }


}
