import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ROUTES } from "../constants/routes";
import { Heading4, Body, Caption } from "../styles";

type Entry = {
  title: string;
  created: string;
  lastUpdated: string;
  to: string;
};

const ENTRIES: Entry[] = [
  {
    title: "fish are friends, sometimes food",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "large tanks review",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "quotes that change how I viewed life",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "monkeys my girlfriend thinks I look like",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "Biomedical Engineering to Computer Science",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "colour blind design",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  },
  {
    title: "word of the day",
    created: "10-07-2023",
    lastUpdated: "10-07-2023",
    to: ""
  }
];

ENTRIES.forEach((entry) => {
  // Remove punctuation from entry.title
  const cleanedTitle = entry.title.replace(/[.,:;'"!?]/g, "");
  entry.to = ROUTES.WRITING + "/" + cleanedTitle.replace(/ /g, "-");
});

const Writing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Heading4>
        I write and create here so that you think I have a personality outside
        of being a software engineer and maybe you&apos;ll hire me for the that.
      </Heading4>
      <br />
      <Heading4>Or not and you learn something new.</Heading4>
      <br />
      <Heading4>Or worst case you hate fish.</Heading4>
      <br />
      <Heading4>enjoy.</Heading4>

      <SectionHeading>
        <Caption>last updated</Caption>
      </SectionHeading>

      <Line />
      {ENTRIES.map((entry) => {
        return (
          <EntryContainer
            key={ENTRIES.indexOf(entry)}
            onClick={() => {
              navigate(entry.to);
            }}
          >
            <Body>{entry.title}</Body>
            <Caption>{entry.lastUpdated}</Caption>
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

const SectionHeading = styled(Heading4)`
  display: flex;
  justify-content: right;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const EntryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid gray;
  height: 45px;
  cursor: pointer;
`;
