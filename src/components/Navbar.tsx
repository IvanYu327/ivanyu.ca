import React from "react";
import { useLocation, Link } from "react-router-dom"; // Import useLocation and Link
import styled from "styled-components";

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <Container>
      <div>
        <NavLink>
          <Link to={"/"}>ivan yu</Link>
        </NavLink>
      </div>
      <NavDirectory>
        {pathSegments.map((segment, index) => (
          <NavItem key={index}>
            <div>/</div>
            <NavLink>
              <Link to={`/${pathSegments.slice(1, index + 1).join("/")}`}>
                {segment}
              </Link>
            </NavLink>
          </NavItem>
        ))}
      </NavDirectory>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 80px;
  background: red;
  border-bottom: 0.5px solid white;
  margin-bottom: 32px;
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

  a {
    text-decoration: none;
    color: white;
  }
`;
