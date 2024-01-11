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
      </Heading4>
      <Heading4>
        Swim around, and see if you can find a fishie that you like!
      </Heading4>
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
              <div>
                <Heading3 style={{ marginBottom: "0", paddingBottom: "0" }}>
                  {fishie?.commonName}
                </Heading3>
                <Heading6 style={{ marginTop: "0" }}>
                  <i>{fishie?.scientificName}</i>
                </Heading6>
                {/* <Heading3>{fishie?.rating}/10</Heading3> */}
              </div>
            </FishieContainer>
            <Body>{fishie?.description}</Body>
            <Body>{fishie?.funFact}</Body>
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
    max-width: 150px;
    max-height: 150px;
  }
`;

const FishieContainer = styled.div`
  display: flex;
`;

const FishieImage = styled.img`
  margin-right: 20px;
`;

export default CatchOfTheDay;
