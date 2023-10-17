import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation and Link
import styled from "styled-components";

import { ROUTES } from "../constants/routes";
import { Body, StyledLink } from "../styles";

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  return (
    <Container>
      <NavDirectory>
        <StyledLink to={ROUTES.MAIN}>ivan-yu</StyledLink>
        {pathSegments.map((segment, index) => {
          return (
            <NavItem key={index}>
              <Body style={{ margin: 0 }}>&nbsp;&nbsp;/&nbsp;&nbsp;</Body>
              <StyledLink to={`/${pathSegments.slice(0, index + 1).join("/")}`}>
                {segment}
              </StyledLink>
            </NavItem>
          );
        })}
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
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden;
  text-overflow: ellipsis; /* Display ellipsis (...) when text overflows */
  // max-width: 150px; /* Truncate if text exceeds 100px in width */
`;
