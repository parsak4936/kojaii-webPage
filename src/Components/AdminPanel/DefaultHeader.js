import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Badge,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import PropTypes from "prop-types";


const propTypes = {
    children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
    render() {
        // eslint-disable-next-line
        const { children, ...attributes } = this.props;

        return (
           <>
               </>
        );
    }
}


export default DefaultHeader;
