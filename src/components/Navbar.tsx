import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation and Link
import styled from "styled-components";

import { StyledLink } from "../styles";

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <Container>
      <NavDirectory>
        <StyledLink to={"/"}>ivan-yu</StyledLink>
        {pathSegments.map((segment, index) => (
          <NavItem key={index}>
            <div>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
            <StyledLink to={`/${pathSegments.slice(1, index + 1).join("/")}`}>
              {segment}
            </StyledLink>
          </NavItem>
        ))}
      </NavDirectory>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 80px;
  border-bottom: 0.5px solid white;
  padding-top: 48px;
  margin-bottom: 32px;
  // background: red;
`;

const NavDirectory = styled.div`
  display: flex;
`;

const NavItem = styled.div`
  display: flex;
`;
