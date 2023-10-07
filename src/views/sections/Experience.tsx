import React from "react";
import styled from "styled-components";

import EXPERIENCES from "../../copy/experience";
import { LargeBodyMedium, LargeBody } from "../../styles";

const ExperienceList: React.FC = () => {
  return (
    <div>
      {EXPERIENCES.map((experience) => (
        <Container key={EXPERIENCES.indexOf(experience)}>
          <LightContainer>
            <LogoContainer color={experience.color}>
              <Logo src={experience.logo} />
            </LogoContainer>
          </LightContainer>
          <div>
            <LargeBodyMedium style={{ paddingTop: "6px" }}>
              {experience.company}
            </LargeBodyMedium>
            <LargeBody style={{ marginTop: "4px" }}>
              {experience.position}
            </LargeBody>
          </div>
        </Container>
      ))}
    </div>
  );
};

export default ExperienceList;

const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
  // background: green;
  min-width: 350px;
`;

const LightContainer = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 17px;
  margin-right: 16px;
  background: #ffffff;
`;

const LogoContainer = styled.div<{ color?: string }>`
  height: 64px;
  width: 64px;

  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  opacity: 1;
  transition: background 0.5s ease;
  cursor: pointer;

  &:hover {
    background: ${(props) => `${props.color}CC`};
  }
`;

const Logo = styled.div<{ src: string }>`
  z-index: 99;
  width: 65%;
  height: 65%;
  background-image: ${(props) => (props.src ? `url("${props.src}")` : "none")};
  background-size: cover;
`;
