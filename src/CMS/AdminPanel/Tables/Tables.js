import React  from "react";

import {CBadge, CButton, CCardBody, CCollapse, CDataTable} from "@coreui/react/es";
import './tables.css'

const fields =
    ['id',
    { key: 'first_name', _style: { width: '20%'} ,label:'نام' },
    { key: 'last_name', _style: { width: '20%'} , label:'نام خانوادگی' },
    { key: 'email', _style: { width: '30%'}, label:'ایمیل' },
    { key: 'type', _style: { width: '10%'} , label:'نوع گزارش'},
    { key: 'text', _style: { width: '30%'}, label:'متن گزارش' },
    {
        key: 'show_details',
        label: '',
        _style: { width: '1%' },
        sorter: false,
        filter: false
    }
]
const valuechanger  =(type) =>{
    if(type=== 0){
        return type =  'پیشنهاد'
    }else if (type === 1){
        return type= "گزارش خطا"

    }

    return {type}
}

const colorswicher =(type) =>{
    if(type=== 0){
       return (
           type =  'پیشنهاد',

        getBadge(type)
       )
    }else if (type === 1){
        return type= "گزارش خطا",
        getBadge(type)
    }
}
const getBadge = (type)=>{
    switch (type) {
        case "پیشنهاد": return 'success';
        case "گزارش خطا": return 'danger';
        default: return 'primary';
    }
}

export default function Table1 ({data})  {


       return (
           <>
               <div className='suptable-container'>


               <div className="tables-header"> <h1>لیست پیشنهادات و انتقادات</h1></div>
               <center>
                   <CDataTable classname="we"
                       items={data}
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
                           'type':
                               (item)=>(
                                   <td>
                                       <CBadge color={colorswicher(item.type)}>
                                           {valuechanger(item.type)}
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
               </div>
           </>
       );




}
