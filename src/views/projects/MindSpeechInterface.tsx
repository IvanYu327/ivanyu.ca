import React from "react";
import Markdown from "react-markdown";
import styled from "styled-components";

import { SSVEP1 } from "../../assets/images";
import CustomMarkdown from "../../components/CustomMarkdown";
import { Body, BodyBold, Heading4 } from "../../styles";
import WhatIDid from "../sections/WhatIDid";

const MindSpeechInterface: React.FC = () => {
  return (
    <div>
      <Image src={SSVEP1} alt="SSVEP1" />
      <WhatIDid
        position="Software Team Lead"
        timeline="2021 - 2023"
        teamSize="45"
        skills={["Team Management", "Biosignal Processing", "UX Design"]}
        tools={["Figma", "Python", "PyQT5", "React", "gtec unicorn"]}
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

const markdown = `
#### key learnings

Start small with an MVP. We encounterd a lot of issues regardling inter-stimuli interference starting our data collection, having started with a interface that had 16 simultaneous stimuli. We had to reduce the number of stimuli to 8, and even then we had to implement a lot of filtering and artifact removal to get clean data.

&nbsp;

On the main interface, we started with desgining with 12 stimuli, but we had to reduce it to 8 to make it more usable. We also had to implement a lot of filtering and artifact removal to get clean data.

#### want to learn more?

Check out:

- [Source code](https://github.com/WATOLINK/mind-speech-interface-ssvep)

- [watolink.ca](watolink.ca)

- [Student teams take home prizes from AI conference](https://uwaterloo.ca/engineering/news/student-teams-take-home-prizes-ai-conference)

- [2022 NeuroTechX Student Club Competition Winners](https://openbci.com/community/2022-neurotechx-student-club-competition-winners/)

- Wearable Brain-Computer Interface Paired with Large Language Model for Fast Speech Communication

`;
