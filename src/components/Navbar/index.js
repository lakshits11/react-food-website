import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, NavIcon, NavLink, Bars, NavImg } from "./NavbarElements";
import logo from "../../images/logo.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <a href="/">
        <NavImg src={logo} alt="logo" />
      </a>
      <Nav>
        <NavLink to="/">PizzaMania</NavLink>
        <NavIcon onClick={toggle}>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
