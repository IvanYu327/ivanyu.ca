import React from "react";
import styled from "styled-components";

import { SSVEP1 } from "../../assets/images";
import WhatIDid from "../sections/WhatIDid";

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
    </div>
  );
};

export default MindSpeechInterface;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
