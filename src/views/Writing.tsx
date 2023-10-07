import React from "react";
import styled from "styled-components";

import { Heading3, LargeBody } from "../styles";

const ENTRIES = [
  {
    title: "Fish review",
    created: "10-07-2023",
    lastUpdated: "10-07-2023"
  },
  {
    title: "Aquarium review",
    created: "10-07-2023",
    lastUpdated: "10-07-2023"
  },
  {
    title: "Quotes that change how I viewed life",
    created: "10-07-2023",
    lastUpdated: "10-07-2023"
  },
  {
    title: "Monkeys my girlfriend thinks I look like",
    created: "10-07-2023",
    lastUpdated: "10-07-2023"
  },
  {
    title: "Biomedical Engineering to CS",
    created: "10-07-2023",
    lastUpdated: "10-07-2023"
  }
];

const Writing: React.FC = () => {
  return (
    <div>
      <Heading3>
        This is a collection of thoughts, web widgets that didn&apos;t turn into
        projects.
      </Heading3>
      <br />
      <Heading3>
        I write and create here so that you think I have a personality outside
        of being a software engineer and maybe you&apos;ll hire me for the that.
      </Heading3>
      <br />

      <SectionHeading>
        <Heading3>enjoy</Heading3>
        <Heading3>last updated</Heading3>
      </SectionHeading>

      <Line />
      {ENTRIES.map((entry) => {
        return (
          <EntryContainer key={ENTRIES.indexOf(entry)}>
            <LargeBody>{entry.title}</LargeBody>
            <LargeBody>{entry.lastUpdated}</LargeBody>
          </EntryContainer>
        );
      })}
      <div style={{ height: "100px" }} />
    </div>
  );
};

export default Writing;

const SectionContainer = styled.div``;

const Line = styled.div`
  border-bottom: 0.5px solid gray;
`;

const SectionHeading = styled(Heading3)`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const EntryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid gray;
  height: 45px;
`;
