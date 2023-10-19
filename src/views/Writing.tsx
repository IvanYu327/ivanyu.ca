import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { WRITING } from "../copy/writing";
import { Heading4, Body, LargeBody, Caption } from "../styles";

const Writing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Heading4>
      This is currently a work in progress as I edit my writing. Please revisit
      soon!
    </Heading4>
  );

  return (
    <div>
      <LargeBody>
        I write and create here so that you may see that I have a personality
        outside of being a software engineer
      </LargeBody>
      <br />
      <LargeBody>
        Maybe you&apos;ll find me more interesting or hire me for the that.
      </LargeBody>
      <br />
      <LargeBody>Or not and you learn something new.</LargeBody>
      <br />
      <LargeBody>Or worst case you hate fish.</LargeBody>
      <br />
      <Body>enjoy.</Body>

      <SectionHeading>
        <Caption>last updated</Caption>
      </SectionHeading>

      <Line />
      {WRITING.map((entry) => {
        if (entry.content) {
          return (
            <EntryContainer
              key={WRITING.indexOf(entry)}
              onClick={() => {
                navigate(entry.to);
              }}
            >
              <Body>{entry.title}</Body>
              <Caption>{entry.lastUpdated}</Caption>
            </EntryContainer>
          );
        }
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
