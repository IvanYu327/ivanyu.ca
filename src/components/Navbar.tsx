import React from "react";
import { useLocation, Link } from "react-router-dom"; // Import useLocation and Link
import styled from "styled-components";

import { StyledLink } from "../styles";

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <Container>
      {/* <TopContainer>
        <StyledLink>
          <Link to={"/about"}>about</Link>
        </StyledLink>
      </TopContainer> */}
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
  height: 32px;
  //   background: red;
  border-bottom: 0.5px solid white;
  margin-top: 48px;
  margin-bottom: 32px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavDirectory = styled.div`
  display: flex;
`;

const NavItem = styled.div`
  display: flex;
`;

const NavLink = styled.div`
  color: white;
  margin: 0 10px;
`;
