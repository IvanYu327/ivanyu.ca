import React from "react";
import styled from "styled-components";

import { Body, BodyBold, Heading4 } from "../../styles";

interface WhatIDidProps {
  position?: string;
  timeline?: string;
  teamSize?: string;
  skills?: string[];
  tools?: string[];
}

const WhatIDid: React.FC<WhatIDidProps> = ({
  position,
  timeline,
  teamSize,
  skills,
  tools
}) => {
  return (
    <Container>
      <Heading4 style={{ color: "gray" }}>Details</Heading4>
      <ColumnContainer>
        <Column>
          {position && (
            <>
              <BodyBold>ROLE</BodyBold>
              <Body>{position}</Body>
              <br />
            </>
          )}
          {timeline && (
            <>
              <BodyBold>TIMELINE</BodyBold>
              <Body>{timeline}</Body>
              <br />
            </>
          )}
          {teamSize && (
            <>
              <BodyBold>TEAM SIZE</BodyBold>
              <Body>{teamSize}</Body>
            </>
          )}
        </Column>
        {skills && skills.length > 0 && (
          <Column>
            <BodyBold>SKILLS</BodyBold>
            {skills.map((skill, index) => (
              <Body key={`skill-${index}`}>{skill}</Body>
            ))}
          </Column>
        )}
        {tools && tools.length > 0 && (
          <Column>
            <BodyBold>TOOLS</BodyBold>
            {tools.map((tool, index) => (
              <Body key={`tool-${index}`}>{tool}</Body>
            ))}
          </Column>
        )}
      </ColumnContainer>
    </Container>
  );
};

export default WhatIDid;

const Container = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  //   border-top: 0.5px solid gray;
  border-bottom: 0.5px solid gray;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ColumnContainer = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 16px;
  min-width: 350px;
`;

const Column = styled.div`
  min-width: 40%;
  padding-right: 16px;
`;
