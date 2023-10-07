import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styled from "styled-components";

import { Caption } from "../styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Caption>made with ♥</Caption>
      <SocialsContainer>
        <SocialButton
          href="https://www.linkedin.com/in/ivanyu327/"
          target="_blank"
        >
          <BsLinkedinIcon />
        </SocialButton>
        <SocialButton href="https://github.com/IvanYu327" target="_blank">
          <BsGithubIcon />
        </SocialButton>
      </SocialsContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  border-top: 0.5px solid white;
  margin-top: 32px;
  padding-top: 16px;
  // background: red;
`;

const Box = styled.div``;

const SocialsContainer = styled.div`
  display: flex;
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  margin-left: 8px;
  background: none;
  border-radius: 50%;
  transition: background 0.5s ease;
  cursor: pointer;
  text-decoration: none; /* Remove underline for the anchor tag */

  &:hover {
    background: #aaaaaaaa;
  }
`;

const BsLinkedinIcon = styled(BsLinkedin)`
  font-size: 24px;
  color: white;
`;

const BsGithubIcon = styled(BsGithub)`
  font-size: 24px;
  color: white;
`;
