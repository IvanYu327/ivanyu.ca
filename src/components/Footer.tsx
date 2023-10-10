import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styled from "styled-components";

import { Tetrio } from "../assets/images";
import { Caption, Heading2 } from "../styles";

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
        <SocialButton href="https://ch.tetr.io/u/weew00" target="_blank">
          <TetrioLogo src={Tetrio} alt="Tetrio logo" />
        </SocialButton>
        <SocialButton href="https://twitter.com/weewoo327" target="_blank">
          <XLogo>𝕏</XLogo>
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
`;

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
  text-decoration: none;

  &:hover {
    background: #77777777;
  }
`;

const BsLinkedinIcon = styled(BsLinkedin)`
  font-size: 24px;
  color: gray;
`;

const BsGithubIcon = styled(BsGithub)`
  font-size: 24px;
  color: gray;
`;

const TetrioLogo = styled.img`
  width: 24px;
  height: auto;
`;

const XLogo = styled(Heading2)`
  color: gray;
  font-size: 34px;
`;
