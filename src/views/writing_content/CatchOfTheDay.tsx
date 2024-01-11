import React, { useState } from "react";
import styled from "styled-components";

import { Body, Heading3, Heading4, Heading5, Heading6 } from "../../styles";

import { Fishies, Fishie } from "./fish/fish";
import MonthPicker from "./MonthPicker";

const CatchOfTheDay = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const fishie: Fishie | undefined = Fishies.find(
    (element) =>
      selectedDate &&
      element.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div>
      <Heading4>
        As a software engineer by day but marine life enthusiast by night, the
        catch of the day is a review of noteworthy or interesting marine life.
        This is meant to highlight the beauty of the ocean and its inhabitants,
        and to share my passion for unique marine life.
      </Heading4>
      <Heading4>Swim around.</Heading4>
      <br />
      <br />
      <br />
      {selectedDate &&
      selectedDate.toDateString() === new Date().toDateString() ? (
        <Heading4>Today&apos;s catch:</Heading4>
      ) : (
        <Heading4>{selectedDate?.toDateString()}</Heading4>
      )}

      <SelectedDate>
        {selectedDate && selectedDate <= new Date() ? (
          <div>
            <FishieContainer>
              <FishieImage src={fishie?.image} alt={fishie?.commonName} />
              <div style={{ minWidth: "100px" }}>
                <Heading3
                  style={{
                    marginTop: "0",
                    marginBottom: "0",
                    paddingBottom: "0"
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.google.com/search?q=${fishie?.commonName}`}
                  >
                    {fishie?.commonName}
                  </a>
                </Heading3>
                <Heading6 style={{ marginTop: "0" }}>
                  <i>{fishie?.scientificName}</i>
                </Heading6>
                {/* <Heading3>{fishie?.rating}/10</Heading3> */}{" "}
                <Body>{fishie?.description}</Body>
                <Body>{fishie?.funFact}</Body>
              </div>
            </FishieContainer>
          </div>
        ) : (
          <Heading5>Come back to see this fishie!</Heading5>
        )}
      </SelectedDate>
      <MonthPicker
        startYear={2024}
        startMonth={0}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

const SelectedDate = styled.div`
  margin-bottom: 10px;

  img {
    max-width: 200px;
    max-height: 200px;
  }
`;

const FishieContainer = styled.div`
  display: flex;
`;

const FishieImage = styled.img`
  margin-right: 20px;
`;

export default CatchOfTheDay;
