import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <Container>
      <Box>made with ♥ by ivan</Box>
      <SocialsContainer>
        <SocialButton>L</SocialButton>
        <SocialButton>G</SocialButton>
        <SocialButton>X</SocialButton>
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
  //   background: red;
`;

const Box = styled.div``;

const SocialsContainer = styled.div`
  display: flex;
`;

const SocialButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: green;
  height: 24px;
  width: 24px;
  margin-left: 8px;
`;
