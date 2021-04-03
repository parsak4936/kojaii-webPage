import React  from "react";
import {CButton, CCardBody, CCollapse, CDataTable} from "@coreui/react/es";
import './joinus_table.css'
const fields = ['id',
    { key: 'name', _style: { width: '30%'} ,label :'نام' },
    { key: 'phone', _style: { width: '40%'} , label :'شماره تماس' },

]

export default function Table1 ({data})  {
        return (
            <>
                <div className="J-table-container">
                    <div className="J-Header"> <h1>لیست پیوستن به ما</h1></div>
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
