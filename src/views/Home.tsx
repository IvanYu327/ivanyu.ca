import React from "react";
import styled from "styled-components";

import { Body, Heading1, Heading2, Heading3, Heading4 } from "../styles";

const Home = () => {
  return (
    <div>
      <HeroContainer>
        <HeroText>
          <Heading3>
            I&apos;m a Computer Science student at the University of Waterloo. A
            software engineer constantly exploring how to create novel
            experiences through tech that change the how we live.
          </Heading3>
          <br />
          <Heading3>
            An avid rock climber, marine animal enthusiast, and Tetris addict.
          </Heading3>
        </HeroText>
        <SpinningThingContainer />
      </HeroContainer>

      <WorkContainer>
        <WorkItem>
          <Heading3>work</Heading3>
          <Body>I make stuff, check it out</Body>
        </WorkItem>
        <WorkItem>
          <Heading3>not work</Heading3>
          <Body>mostly writing</Body>
        </WorkItem>
      </WorkContainer>

      <WorkContainer>
        <WorkItem>
          <Heading3>about</Heading3>
          <Body>more me, if you&apos;re interested</Body>
        </WorkItem>
      </WorkContainer>

      <ExperienceContainer>
        <Heading3>experience</Heading3>
        <Body>HTN BE</Body>
        <Body>DB SWE</Body>
        <Body>UW Blueprint SWE</Body>
        <Body>HTN FE</Body>
        <Body>iVenuto SWE</Body>
        <Body>Cognixion SWE</Body>
      </ExperienceContainer>
    </div>
  );
};

export default Home;

const HeroContainer = styled.div`
  display: flex;
`;

const HeroText = styled.div`
  padding-right: 16px;
`;

const SpinningThingContainer = styled.div`
  height: 200px;
  width: 200px;
  background: red;
  flex: 0 0 auto;
`;

const WorkContainer = styled.div`
  margin-top: 32px;
  display: flex;
`;

const WorkItem = styled.div`
  width: 50%;
`;

const ExperienceContainer = styled.div`
  margin-top: 32px;
`;
