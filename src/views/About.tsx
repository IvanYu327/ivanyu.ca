import React from "react";
import styled from "styled-components";

import { Ivan } from "../assets/images";
import CustomMarkdown from "../components/CustomMarkdown";
import {
  Body,
  BodyBold,
  BodyMedium,
  Caption,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Hyperlink,
  LargeBody,
  LargeBodyBold,
  LargeBodyMedium
} from "../styles";

const About: React.FC = () => {
  return (
    <div>
      <HeroContainer>
        <HeroText>
          <LargeBody>
            I&apos;m studying Computer Science at the University of Waterloo. A
            software engineer constantly exploring and pushing the bounderies of
            tech.
          </LargeBody>
          <br />
          <LargeBody>
            Avid rock climber, marine organism enthusiast, and Tetris addict.
          </LargeBody>
        </HeroText>
        <Image src={Ivan} />
      </HeroContainer>
      <br /> <br />
      <SpaceBetween>
        <Heading5>this website</Heading5>
        <Body>last updated Oct 12, 2023</Body>
      </SpaceBetween>
      <br /> <br />
      <Heading5>typography </Heading5>
      <Body>
        Everything is in the system default Inter font right now. Currently
        looking for a fruiter sans serif font.
      </Body>
      <br /> <br />
      <Heading5>technical</Heading5>
      <Body>
        Built with{" "}
        <Hyperlink href="https://react.dev/" target="_blank">
          React
        </Hyperlink>
        ,{" "}
        <Hyperlink href="https://www.typescriptlang.org/" target="_blank">
          Typescript
        </Hyperlink>
        , and{" "}
        <Hyperlink href="https://styled-components.com/" target="_blank">
          styled-components
        </Hyperlink>
        . Deployed and hosted on{" "}
        <Hyperlink href="https://vercel.com/" target="_blank">
          Vercel
        </Hyperlink>
        . Source code available on{" "}
        <Hyperlink href="https://github.com/IvanYu327/ivanyu.ca" target="blank">
          Github
        </Hyperlink>
        .
      </Body>
      {/* <Heading4>Photography </Heading4>
      <Body>
        All images were taken or created by Linus Rogge, if not stated
        otherwise. I aim to provide sources for all imagery on this site.
        However, due to the nuances of the internet and platforms for visual
        inspiration, it’s not always possible to do so. Credits on most images
        can be found by hovering them.
      </Body> */}
      <br /> <br />
      <Heading5>inspiration </Heading5>
      <Body>
        People and pages that inspired the current version of this site —
        visually, substantially, or personally.
      </Body>
      <br />
      <Body>
        <Hyperlink href="https://www.wilburzhang.com/" target="blank">
          wilburzhang.com
        </Hyperlink>
      </Body>
      <Body>
        <Hyperlink href="https://linusrogge.com/" target="blank">
          linusrogge.com
        </Hyperlink>
      </Body>
      <Body>
        <Hyperlink href="https://www.joshlu.me/" target="blank">
          joshlu.me
        </Hyperlink>
      </Body>
      <Body>
        <Hyperlink href="https://jennyzhao.webflow.io/" target="blank">
          jennyzhao.webflow.io
        </Hyperlink>
      </Body>
      <Body>
        <Hyperlink href="https://kelvinzhang.com/" target="blank">
          kelvinzhang.com
        </Hyperlink>
      </Body>
      {/* <Body>good people </Body>
      <Body>
        There wouldn’t be enough space to list every important person here, but
        these are a few of the good souls that made a positive impact in my
        life: Anton Stallbörger Neo Mohr Benjamin Hutter Moritz Breuer Moritz
        Kindler Henri Bredt Alexander Zank Leander Lenzing Malte Körte Emil Dax
        Florian Kiem Nils Eller Raphael Volpert Valentin Rudloff Sam di Mauro
        Piet Terheyden
      </Body> */}
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

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
