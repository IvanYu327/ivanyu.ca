import React from "react";
import Markdown from "react-markdown";
import styled, { keyframes } from "styled-components";

import { SSVEP1 } from "../../assets/images";
import CustomMarkdown from "../../components/CustomMarkdown";
import { Body, BodyBold, Heading4 } from "../../styles";
import WhatIDid from "../sections/WhatIDid";

const MindSpeechInterface: React.FC = () => {
  return (
    <div>
      <div>
        <Image src={SSVEP1} alt="SSVEP1" />
        {/* <Circle1 /> */}
      </div>

      <WhatIDid
        position="Software Team Lead"
        timeline="2021 - 2023"
        teamSize="45"
        skills={["Team Management", "Biosignal Processing", "UX Design"]}
        tools={[
          "Figma",
          "Python",
          "PyQT5",
          "React",
          "web sockets",
          "gtec unicorn"
        ]}
      />
      <CustomMarkdown markdown={markdown} />
    </div>
  );
};

export default MindSpeechInterface;

const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  height: auto;
  //   box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.2);
`;

// Define keyframes for animations
const flashAnimation1 = keyframes`
  0% {
    background-color: black;
  }
  50% {
    background-color: white;
  }
  100% {
    background-color: black;
  }
`;

// Styled components for the circles
const Circle1 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  animation: ${flashAnimation1} 0.2s linear infinite;

  position: relative;
  bottom: 37%;
  left: 40%;
`;

const markdown = `
#### results

First place - NeurotechX 2022

Best Demo - Canadian Undergraduate Conference for AI

#### key learnings

Start small with an MVP. I encounterd a lot of issues regardling inter-stimuli interference starting our data collection, having started with a interface that had 16 differently colored stimuli. I had to reduce the number of stimuli to 8 white stimuli, and even then there was a lot of filtering and artifact removal needed to get clean data.

&nbsp;

On the main interface, the original design had 12 stimuli, but it had to be reduced it to 8 white stimuli to make it more usable. The theoretical limit should have been able to work with 12 or 16 stimuli with different colors, that we were also bound by the limitations of our hardware and our lack of a fully controlled environment.

#### want to learn more?

Check out:

- [Source code](https://github.com/WATOLINK/mind-speech-interface-ssvep)

- [watolink.ca](watolink.ca)

- [Student teams take home prizes from AI conference](https://uwaterloo.ca/engineering/news/student-teams-take-home-prizes-ai-conference)

- [2022 NeuroTechX Student Club Competition Winners](https://openbci.com/community/2022-neurotechx-student-club-competition-winners/)

- [Wearable Brain-Computer Interface Paired with Large Language Model for Fast Speech Communication]()

`;
