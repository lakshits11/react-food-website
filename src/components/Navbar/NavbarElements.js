import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  padding-right: 90px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 17px;
  right: 0;
  cursor: pointer;
  color: #ffffff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const NavImg = styled.img`
  float: left;
  position: relative;
  margin: 20px 15px 15px 20px;
  height: 50px;
  width: 50px;
  filter: invert(100%);
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2.5rem;
  transform: translate(-50%, 15%);
`;
