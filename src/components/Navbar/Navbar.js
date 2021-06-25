import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo href="/">
                TFT<span>Helper</span>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>
            <Menu isOpen={isOpen}>
                <SubMenu href="/Champions">Champions</SubMenu>
                <SubMenu href="/MetaComps">Meta Comps</SubMenu>
                <SubMenu href="/Items">Items</SubMenu>
            </Menu>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  div {
    font-size: 12px;
    color: darkgoldenrod;
    font-weight: 800;
  }
`;

const Logo = styled.a`
  padding: 1.2rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    padding-left: 0.3rem;
    font-weight: 600;
    font-size: 1.3rem;
    color: cornflowerblue;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
const SubMenu = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #005792;
  font-weight: 600;
  transition: all 0.3s ease-in;
  font-size: 1.1rem;
  &:hover {
    color: #7b7fda;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;