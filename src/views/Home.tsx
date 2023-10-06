import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ROUTES } from "../constants/routes";
import {
  Body,
  BodyBold,
  BodyMedium,
  Caption,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  LargeBody,
  LargeBodyBold,
  LargeBodyMedium
} from "../styles";

import ExperienceList from "./sections/Experience";

const Home = () => {
  const [activeHeading, setActiveHeading] = useState<number | null>(null);

  const handleHeadingHover = (index: number) => {
    setActiveHeading(index);
  };

  const handleHeadingLeave = () => {
    setActiveHeading(null);
  };

  return (
    <div>
      <HeroContainer>
        <HeroText>
          <Heading3>
            I&apos;m a Computer Science student at the University of Waterloo. A
            software engineer constantly exploring and pushing the bounderies of
            tech.
          </Heading3>
          <br />
          <Heading3>
            An avid rock climber, marine animal enthusiast, and Tetris addict.
          </Heading3>
        </HeroText>
        <SpinningThingContainer>shark</SpinningThingContainer>
      </HeroContainer>

      <WorkContainer>
        <Explore
          active={activeHeading !== null}
          top={activeHeading ? activeHeading * 30 : 0}
        >
          <Heading3>explore</Heading3>
        </Explore>
        <div>
          <ExploreHeading
            active={activeHeading === null || activeHeading === 0}
            onMouseEnter={() => handleHeadingHover(0)}
            onMouseLeave={handleHeadingLeave}
          >
            my work
          </ExploreHeading>
          <ExploreHeading
            active={activeHeading === null || activeHeading === 1}
            onMouseEnter={() => handleHeadingHover(1)}
            onMouseLeave={handleHeadingLeave}
          >
            my other work
          </ExploreHeading>
          <ExploreHeading
            active={activeHeading === null || activeHeading === 2}
            onMouseEnter={() => handleHeadingHover(2)}
            onMouseLeave={handleHeadingLeave}
          >
            me
          </ExploreHeading>
          <ExploreHeading
            active={activeHeading === null || activeHeading === 3}
            onMouseEnter={() => handleHeadingHover(3)}
            onMouseLeave={handleHeadingLeave}
          >
            a surprise
          </ExploreHeading>
        </div>
      </WorkContainer>

      <ExperienceContainer>
        <Dummy>
          <Heading3>experience </Heading3>
        </Dummy>
        <ExperienceList />
      </ExperienceContainer>
      <br />
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4>Heading 4</Heading4>
      <br />
      <LargeBody>LargeBody</LargeBody>
      <LargeBodyMedium>LargeBodyMedium</LargeBodyMedium>
      <LargeBodyBold>LargeBodyBold</LargeBodyBold>
      <br />
      <Body>Body</Body>
      <BodyMedium>BodyMedium</BodyMedium>
      <BodyBold>BodyBold</BodyBold>
      <Caption>Caption</Caption>
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

const Explore = styled.div<{ active: boolean; top: number }>`
  width: 150px;
  position: relative;
  top: ${(props) => props.top}px;
  transition: all 0.3s ease;
  color: ${(props) => (props.active ? "white" : "gray")};
`;

const ExploreHeading = styled(Heading3)<{ active: boolean }>`
  margin-right: 10px;
  color: ${(props) => (props.active ? "white" : "gray")};
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Dummy = styled.div`
  width: 150px;
`;

const WorkItem = styled.div`
  width: 50%;
`;

const ExperienceContainer = styled.div`
  margin-top: 32px;
  display: flex;
`;
