import React from "react";
import styled from "styled-components";

import { Ivan } from "../assets/images";
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

const About: React.FC = () => {
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
        <Image src={Ivan} />
      </HeroContainer>
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
      <br />
      <Caption>Caption</Caption>
    </div>
  );
};

export default About;

const HeroContainer = styled.div`
  display: flex;
`;

const HeroText = styled.div`
  padding-right: 16px;
`;

const Image = styled.div<{ src: string }>`
  height: 200px;
  width: 200px;
  background-image: ${(props) => (props.src ? `url("${props.src}")` : "none")};
  background-size: cover;
  flex: 0 0 auto;
`;
