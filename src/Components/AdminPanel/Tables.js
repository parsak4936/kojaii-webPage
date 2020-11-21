import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";


const { SearchBar } = Search;

const columns = [
    {
        dataField: "id",
        text: "Product ID",
        sort: true
    },
    {
        dataField: "name",
        text: "Product Name",
        sort: true
    },
    {
        dataField: "price",
        text: "Product Price",
        validator: (newValue, row, column) => {
            if (isNaN(newValue)) {
                return {
                    valid: false,
                    message: "Price should be numeric"
                };
            }
            if (newValue > 5) {
                return {
                    valid: false,
                    message: "Price should less than 6"
                };
            }
            return true;
        }
    },

];


const defaultSorted = [
    {
        dataField: "name",
        order: "desc"
    }
];

export default class Table1 extends React.Component {
    onRadioBtnClick() {
        console.log("het");
    }
    render() {
        const rowEvents = {
            onClick: (e, row, rowIndex) => {
                console.log(`clicked on row with index: ${rowIndex}`);
            }
        };
        const products = [
            { id: 1, name: "Jay", price: 1 },
            { id: 2, name: "orange", price: 2 },
            { id: 3, name: "banana", price: 3 },
            { id: 4, name: "peach", price: 2 },
            { id: 5, name: "carrot", price: 1 },
            { id: 6, name: "grapes", price: 4 },
            { id: 7, name: "mango", price: 1 },
            { id: 8, name: "potatoe", price: 3 },
            { id: 9, name: "onion", price: 3 }
        ];
        const CaptionElement = () => (
            <h3
                style={{
                    borderRadius: "0.25em",
                    textAlign: "center",
                    color: "purple",
                    border: "1px solid purple",
                    padding: "0.5em"
                }}
            >
                Component as Header
            </h3>
        );

        return (
            <ToolkitProvider
                bootstrap4
                defaultSorted={defaultSorted}
                keyField="id"
                data={products}
                columns={columns}
                search
            >
                {props => (
                    <div>
                        <h3>Search the Students:</h3>
                        <SearchBar {...props.searchProps} />
                        <hr />
                        <BootstrapTable
                            hover
                            noDataIndication="No Students to show right now"
                            // rowEvents={ rowEvents }
                            {...props.baseProps}
                        />
                    </div>
                )}
            </ToolkitProvider>
        );
    }
}
