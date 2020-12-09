import React  from "react";
import {CButton, CCardBody, CCollapse, CDataTable} from "@coreui/react/es";
import './joinus_table.css'

const usersData = [
    {id: 0, نام_و_نام_خانوادگی: 'John Doe', تاریخ: '2018/01/01', شماره : '09196948565' },
    {id: 1, نام_و_نام_خانوادگی: 'Samppa Nori', تاریخ: '2018/01/01', شماره: '09196948565' },
    {id: 2, نام_و_نام_خانوادگی: 'Estavan Lykos', تاریخ: '2018/02/01', شماره: '09196948565' },
    {id: 3, نام_و_نام_خانوادگی: 'Chetan Mohamed', تاریخ: '2018/02/01', شماره: '09196948565' },
    {id: 4, نام_و_نام_خانوادگی: 'Derick Maximinus', تاریخ: '2018/03/01', شماره: '09196948565'},
    {id: 5, نام_و_نام_خانوادگی: 'Friderik Dávid', تاریخ: '2018/01/21', شماره: '09196948565' },
    {id: 6, نام_و_نام_خانوادگی: 'Yiorgos Avraamu', تاریخ: '2018/01/01', شماره: '09196948565' },
    {id: 7, نام_و_نام_خانوادگی: 'Avram Tarasios', تاریخ: '2018/02/01', شماره: '09196948565'},
    {id: 8, نام_و_نام_خانوادگی: 'Quintin Ed', تاریخ: '2018/02/01', شماره: '09196948565' },
    {id: 9, نام_و_نام_خانوادگی: 'Enéas Kwadwo', تاریخ: '2018/03/01', شماره: '09196948565' },
    {id: 10, نام_و_نام_خانوادگی: 'Agapetus Tadeáš', تاریخ: '2018/01/21', شماره: '09196948565' },
    {id: 11, نام_و_نام_خانوادگی: 'Carwyn Fachtna', تاریخ: '2018/01/01', شماره: '09196948565' },
    {id: 12, نام_و_نام_خانوادگی: 'Nehemiah Tatius', تاریخ: '2018/02/01', شماره: '09196948565' },
    {id: 13, نام_و_نام_خانوادگی: 'Ebbe Gemariah', تاریخ: '2018/02/01', شماره: '09196948565' },
    {id: 14, نام_و_نام_خانوادگی: 'Eustorgios Amulius', تاریخ: '2018/03/01', شماره: '09196948565' },
    {id: 15, نام_و_نام_خانوادگی: 'Leopold Gáspár', تاریخ: '2018/01/21', شماره: '09196948565' },
    {id: 16, نام_و_نام_خانوادگی: 'Pompeius René', تاریخ: '2018/01/01', شماره: '09196948565' },
    {id: 17, نام_و_نام_خانوادگی: 'Paĉjo Jadon', تاریخ: '2018/02/01', شماره: '09196948565' },
    {id: 18, نام_و_نام_خانوادگی: 'Micheal Mercurius', تاریخ: '2018/02/01', شماره: '09196948565' },
    {id: 19, نام_و_نام_خانوادگی: 'Ganesha Dubhghall', تاریخ: '2018/03/01', شماره: '09196948565' },
    {id: 20, نام_و_نام_خانوادگی: 'Hiroto Šimun', تاریخ: '2018/01/21', شماره: '09196948565'},
    {id: 21, نام_و_نام_خانوادگی: 'Vishnu Serghei', تاریخ: '2018/01/01', شماره: '09196948565'},
    {id: 22, نام_و_نام_خانوادگی: 'Zbyněk Phoibos', تاریخ: '2018/02/01', شماره: '09196948565', },
    {id: 23, نام_و_نام_خانوادگی: 'Aulus Agmundr', تاریخ: '2018/01/01', شماره: '09196948565' },
    {id: 42, نام_و_نام_خانوادگی: 'Ford Prefect', تاریخ: '2001/05/25', شماره: '09196948565' }
]

const fields = ['id',
    { key: 'name', _style: { width: '30%'} ,label :'نام' },
    { key: 'phone', _style: { width: '40%'} , label :'شماره تماس' },

]




export default function Table1 ({data})  {
console.log(data)


        return (
            <>
                <div className="J-table-container">
                    <div className="J-Header"> <h1>Joius</h1></div>
                    <CDataTable
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
                </div>

            </>
        );




}
