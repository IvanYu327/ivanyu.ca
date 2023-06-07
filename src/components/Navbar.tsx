import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <NavbarContainer>
      <div className="container">
        <div className="logo">
          {/* <Brand /> */}
          logos
        </div>
        <div className="nav-elements">
          <NavbarElements>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Building</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Writing</NavLink>
            </li>
            <li>
              <NavLink to="/about">Me</NavLink>
            </li>
          </NavbarElements>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  height: 60px;
  background-color: #fef7e5;
  position: relative;
`;

const NavbarElements = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;
