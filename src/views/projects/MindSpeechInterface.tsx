import React from "react";
import styled from "styled-components";

import { SSVEP1 } from "../../assets/images";
import WhatIDid from "../sections/WhatIDid";
import { Body } from "../../styles";

const MindSpeechInterface: React.FC = () => {
  return (
    <div>
      <Image src={SSVEP1} alt="SSVEP1" />
      <WhatIDid
        position="Software Team Lead"
        timeline="Sept 2021 - Mar 2023"
        teamSize="45"
        skills={["Team Management", "Biosignal Processing", "UX Design"]}
        tools={["Figma", "Python", "PyQT5", "React", "gtec unicorn"]}
      />
      <Body style={{ fontStyle: "italic" }}>
        To preface this project, this interface is a culmination not just my own
        work, but 40+ students&apos; contributions over the course of 1.5 years.
      </Body>
      <br />
      <Body>{"text ".repeat(1000)}</Body>
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
