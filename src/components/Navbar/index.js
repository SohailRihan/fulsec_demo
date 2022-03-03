import React, { useEffect } from "react";
// import image from "../../images/logo.jpeg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ( ) =>{
    if(window.scrollY >=80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="home">Fulsec</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="products">Products</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="achievements">Achievements</NavLinks>
            </NavItem>
           
            <NavItem>
              <NavLinks to="partners">Partners</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="resources">Resources</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Blog">Blog</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="signup">
            Get a Quote

            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
