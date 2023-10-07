import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { getRandomRoute } from "../utils/helper";

import ExperienceList from "./sections/Experience";

const EXPLORE = [
  {
    heading: "my work.",
    description: "i build stuff, check it out",
    to: ROUTES.WORK
  },
  {
    heading: "my other work.",
    description: "fun, writing, and some fun writing",
    to: ROUTES.WRITING
  },
  {
    heading: "me.",
    description: "more about me, if you're interested",
    to: ROUTES.ABOUT
  },
  {
    heading: "a surprise.",
    description: "fafo",
    to: getRandomRoute()
  }
];

const Home = () => {
  const navigate = useNavigate();

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
            An avid rock climber, marine organism enthusiast, and Tetris addict.
          </Heading3>
        </HeroText>
        <SpinningThingContainer>shark</SpinningThingContainer>
      </HeroContainer>

      <WorkContainer>
        <Explore
          active={activeHeading !== null}
          top={activeHeading ? activeHeading * 50 : 0}
        >
          <Heading3>explore</Heading3>
        </Explore>
        <ExploreHeadingContainer>
          {EXPLORE.map((item) => {
            return (
              <ExploreHeading
                key={EXPLORE.indexOf(item)}
                active={
                  activeHeading === null ||
                  activeHeading === EXPLORE.indexOf(item)
                }
                onMouseEnter={() => handleHeadingHover(EXPLORE.indexOf(item))}
                onMouseLeave={handleHeadingLeave}
                onClick={() => navigate(item.to)}
              >
                {item.heading}
              </ExploreHeading>
            );
          })}
        </ExploreHeadingContainer>
        <ExploreDescription
          active={activeHeading !== null}
          top={activeHeading ? activeHeading * 50 : 0}
        >
          <Heading3>
            {activeHeading
              ? EXPLORE[activeHeading].description
              : EXPLORE[0].description}
          </Heading3>
        </ExploreDescription>
      </WorkContainer>

      <ExperienceContainer>
        <Dummy>
          <Heading3 style={{ color: "gray" }}>experience </Heading3>
        </Dummy>
        <ExperienceList />
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

const ExploreHeadingContainer = styled.div`
  width: 200px;
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

const ExploreDescription = styled.div<{ active: boolean; top: number }>`
  width: 400px;
  position: relative;
  top: ${(props) => props.top}px;
  transition: all 0.3s ease;
  color: ${(props) => (props.active ? "white" : "gray")};
`;

const ExploreHeading = styled(Heading3)<{ active: boolean }>`
  min-height: 50px;
  margin-right: 10px;
  color: ${(props) => (props.active ? "white" : "gray")};
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Dummy = styled.div`
  width: 150px;
`;

const ExperienceContainer = styled.div`
  margin-top: 32px;
  display: flex;
`;
