import React from "react";
import styled from "styled-components";

import EXPERIENCES from "../../copy/experience";

const ExperienceList: React.FC = () => {
  return (
    <div>
      {EXPERIENCES.map((experience) => (
        <Container key={EXPERIENCES.indexOf(experience)}>
          <Logo />
          <div>
            <div>{experience.company}</div>
            <div>{experience.position}</div>
          </div>
        </Container>
      ))}
    </div>
  );
};

export default ExperienceList;

const Container = styled.div`
  display: flex;
  margin-top: 16px;
`;

const Logo = styled.div`
  height: 64px;
  width: 64px;
  background: red;
  margin-right: 16px;
`;
