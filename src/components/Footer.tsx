import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  background: yellow;
  justify-content: center;
  //   align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
`;

const SocialLink = styled(Link)`
  margin: 0 10px;
  color: black;
  text-decoration: none;

  &:hover {
    color: #555; /* Customize the hover color as needed */
  }
`;

const ICON_SIZE = 32;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialLink
        to="mailto: i7yu@uwaterloo.ca?subject=Hi Ivan!"
        target="_blank"
      >
        <SiMinutemailer size={ICON_SIZE} />
      </SocialLink>
      <SocialLink to="https://github.com/IvanYu327" target="_blank">
        <FaGithub size={ICON_SIZE} />
      </SocialLink>
      <SocialLink to="https://www.linkedin.com/in/ivanyu327/" target="_blank">
        <FaLinkedin size={ICON_SIZE} />
      </SocialLink>
    </FooterContainer>
  );
};

export default Footer;
