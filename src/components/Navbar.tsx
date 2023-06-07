import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import styled from "styled-components";

import { theme, sizes } from "../styles";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <ContentWrapper>
        <NavbarText>Ivan Yu</NavbarText>
        <SocialIcons>
          <SocialLink
            to="mailto: i7yu@uwaterloo.ca?subject=Hi Ivan!"
            target="_blank"
          >
            <SiMinutemailer size={ICON_SIZE} />
          </SocialLink>
          <SocialLink to="https://github.com/IvanYu327" target="_blank">
            <FaGithub size={ICON_SIZE} />
          </SocialLink>
          <SocialLink
            to="https://www.linkedin.com/in/ivanyu327/"
            target="_blank"
          >
            <FaLinkedin size={ICON_SIZE} />
          </SocialLink>
        </SocialIcons>
      </ContentWrapper>
    </NavbarContainer>
  );
};

export default Navbar;

const ICON_SIZE = 32;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
  height: ${sizes.navbar.height}; /* Adjust the height as needed */
  z-index: 1; v
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${sizes.maxWidth};
  width: 100%;
  padding: 0 10px; /* Adjust the padding as needed */
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

const SocialLink = styled(Link)`
  margin: 0 10px;
  color: ${theme.colors.text.dark.white};
  text-decoration: none;

  &:hover {
    color: grey;
  }
`;

const NavbarText = styled.div`
  color: ${theme.colors.text.dark.white}; /* Customize the color as needed */
`;
