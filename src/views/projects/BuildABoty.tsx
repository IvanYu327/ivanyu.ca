import React from "react";
import styled from "styled-components";

import { BuildABoty1 } from "../../assets/images";
import CustomMarkdown from "../../components/CustomMarkdown";
import { Body, BodyBold, Heading4 } from "../../styles";
import WhatIDid from "../sections/WhatIDid";

const MindSpeechInterface: React.FC = () => {
  return (
    <div>
      <Image src={BuildABoty1} alt="Build a Bot-y" />
      <WhatIDid
        timeline="36 hours"
        teamSize="4"
        skills={["Web design", "UX Design"]}
        tools={["Figma", "Python", "JSON", "HTML/CSS", "Javascript"]}
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
#### summary

The code is jank, is poorly written, but it works and this project marks my first hackathon win, and beginning of my journey into software engineering.

#### results

First place - EngHack Quests 2021 (University of Waterloo)

#### want to learn more?

Check out:

- [Source code](https://github.com/IvanYu327/Build-a-Bot-y_EngHackQuests21/blob/main/README.md)

- [Bot Demo (Video)](https://www.youtube.com/watch?v=lYSbyvhQNSw&ab_channel=wendy)

- [Website Demo (Video)](https://www.youtube.com/watch?v=u_g6pF_J2nA&ab_channel=IvanYu)

`;
