import React from "react";
import styled from "styled-components";

import EXPERIENCES from "../../copy/experience";
import { LargeBodyMedium, LargeBody } from "../../styles";

const ExperienceList: React.FC = () => {
  return (
    <div>
      {EXPERIENCES.map((experience) => (
        <Container key={EXPERIENCES.indexOf(experience)}>
          <Logo />
          <div>
            <LargeBodyMedium>{experience.company}</LargeBodyMedium>
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
`;

const Logo = styled.div`
  height: 64px;
  width: 64px;
  background: red;
  margin-right: 16px;
`;
