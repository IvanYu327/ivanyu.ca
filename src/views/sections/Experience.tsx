import React from "react";
import styled from "styled-components";

import EXPERIENCES from "../../copy/experience";
import { LargeBodyMedium, LargeBody } from "../../styles";

const ExperienceList: React.FC = () => {
  return (
    <div>
      {EXPERIENCES.map((experience) => (
        <Container key={EXPERIENCES.indexOf(experience)}>
          <LogoContainer color={experience.color}>
            <Logo src={experience.logo} />
          </LogoContainer>
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

const LogoContainer = styled.div<{ color?: string }>`
  height: 64px;
  width: 64px;
  margin-right: 16px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
`;

const Logo = styled.div<{ src: string }>`
  width: 65%;
  height: 65%;
  background-image: ${(props) => (props.src ? `url("${props.src}")` : "none")};
  background-size: cover;
`;
