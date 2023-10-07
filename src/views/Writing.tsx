import React from "react";
import styled from "styled-components";

import { Heading3 } from "../styles";

const Writing: React.FC = () => {
  return (
    <div>
      <Heading3>
        This is a colletion of thoughts, web widgets that didn&apos;t turn into
        projects.
      </Heading3>
      <br />
      <Heading3>
        I write and create here so that you think I have a personality outside
        of being a software engineer.
      </Heading3>
      <br />

      <SectionHeading>
        <Heading3>enjoy.</Heading3>
      </SectionHeading>
    </div>
  );
};

export default Writing;

const SectionContainer = styled.div``;

const SectionHeading = styled(Heading3)`
  margin-top: 16px;
  border-bottom: 0.5px solid white;
`;
