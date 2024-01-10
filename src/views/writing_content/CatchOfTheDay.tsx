import React, { useState } from "react";
import styled from "styled-components";

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
      <SelectedDate>
        {selectedDate && (
          <div>
            <img src={fishie?.image} alt={fishie?.commonName} />
            <p>{selectedDate.toDateString()}</p>
            <p>{fishie?.commonName}</p>
            <p>{fishie?.rating}/10</p>
            <p>{fishie?.description}</p>
            <p>{fishie?.funFact}</p>
          </div>
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
  text-align: center;
  margin-bottom: 10px;

  img {
    max-width: 100px;
    max-height: 100px;
  }
`;

export default CatchOfTheDay;
