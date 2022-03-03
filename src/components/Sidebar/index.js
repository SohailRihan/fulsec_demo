import React from "react";
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarLink, SidebarWrapper, SidebarRoute, SidebarMenu } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen = {isOpen} onClick= {toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick= {toggle} >Home</SidebarLink>
          <SidebarLink to="products" onClick= {toggle}>Products</SidebarLink>
          <SidebarLink to="services" onClick= {toggle}>Services</SidebarLink>
          <SidebarLink to="achievements" onClick= {toggle}>Achievements</SidebarLink>
          <SidebarLink to="resources" onClick= {toggle}>Resources</SidebarLink>
          <SidebarLink to="about" onClick= {toggle}>Company</SidebarLink>
          <SidebarLink to="partners" onClick= {toggle}>Partners</SidebarLink>
          <SidebarLink to="blog" onClick= {toggle}>Blog</SidebarLink>
        </SidebarMenu>
        <br />
        <SideBtnWrap>
            <SidebarRoute to = 'signup' onClick= {toggle}>
                Get Quote
            </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
