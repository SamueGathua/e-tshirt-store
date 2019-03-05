import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import{ButtonContainer} from './Button';


class Navbar extends Component {
  render() {
    return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sn-5">
    <Link to="/">
    <img src={logo} alt="e-tshirt"
    className="navbar-brand"/>
    </Link>
    <ul className="navbar-nav align-items-center">
    <li className="nav-item ml-5">
    <Link to="/" className="nav-link">
    Products
    </Link>
    </li>
    <li className="nav-item ml-5">
    <Link to="/login" className="nav-link">

    Login
    </Link>
    </li>
    </ul>

    <Link to="/cart" className="ml-auto">
    <ButtonContainer>
    <span className="mr-2">
     <i className="fas fa-cart-plus"/>
    </span>
    My cart
    </ButtonContainer>
    </Link>
    </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
background:var(--mainYellow);
.nav-link{
  color:#ffffff !important;
  font-size:1.04rem;
  text-transform:capitalize;
}
`

export default Navbar;
