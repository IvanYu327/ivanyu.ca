import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme, sizes } from "../styles";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <ContentWrapper>
        <NavbarText>
          <NavLink to="/">Ivan Yu</NavLink>
        </NavbarText>

        <NavItems>
          <NavLink to="/projects">building</NavLink>
          <NavLink to="/explore">exploring</NavLink>
          <NavLink to="/about">me</NavLink>
        </NavItems>
      </ContentWrapper>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
  height: ${sizes.navbar.height};
  z-index: 1; v
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${sizes.maxWidth};
  width: 100%;
  padding: 0 10px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  color: ${theme.colors.text.dark.white};
  text-decoration: none;

  transition: all 0.5s ease;
  &:hover {
    color: grey;
  }
`;

const NavbarText = styled.div`
  color: ${theme.colors.text.dark.white};
`;
