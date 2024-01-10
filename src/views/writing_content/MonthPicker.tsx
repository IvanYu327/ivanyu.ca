import React, { useState } from "react";
import { FaFishFins } from "react-icons/fa6";
import styled from "styled-components";

import { Heading3 } from "../../styles";

import { Fishies, Fishie } from "./fish/fish";

interface Day {
  day: number;
  date: Date | null;
  image: string | undefined; // Replace with the actual image source type
}

interface MonthPickerProps {
  startYear: number;
  startMonth: number;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const MonthPickerContainer = styled.div``;

const Heading = styled.h2`
  margin-bottom: 10px;
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 50px);
  gap: 5px;
`;

const DaySquare = styled.div<{ isSelected: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  background-color: ${(props) => (props.isSelected ? "gray" : "transparent")};
  opacity: ${(props) => (props.isSelected ? 1 : 0.5)};

  &:hover {
    background-color: gray;
    opacity: 1;
  }

  img {
    max-width: 50px;
    max-height: 50px;
  }
`;

const MonthPicker: React.FC<MonthPickerProps> = ({
  startYear,
  startMonth,
  selectedDate,
  setSelectedDate
}) => {
  const handleDayClick = (dayData: Day) => {
    setSelectedDate(dayData.date);
  };

  const generateMonthDays = (year: number, month: number): Day[][] => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

    const monthDays: Day[][] = [[]];
    let currentWeek = 0;

    // Add blank squares for the offset
    for (let i = 0; i < firstDayOfMonth; i++) {
      monthDays[currentWeek].push({ day: 0, date: null, image: "" }); // Blank square
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      const fishie: Fishie | undefined = Fishies.find(
        (element) =>
          selectedDate &&
          date &&
          element.date.toDateString() === date.toDateString()
      );

      const dayData: Day = { day, date, image: fishie?.image }; // Replace with actual image source

      if (monthDays[currentWeek].length === 7) {
        monthDays.push([]);
        currentWeek++;
      }

      monthDays[currentWeek].push(dayData);
    }

    return monthDays;
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const allMonths: JSX.Element[] = [];

  for (let year = startYear; year <= currentYear; year++) {
    for (let month = 0; month < 12; month++) {
      if (
        (year === startYear && month < startMonth) ||
        (year === currentYear && month > currentMonth)
      ) {
        continue;
      }

      const monthDays = generateMonthDays(year, month);

      allMonths.push(
        <div key={`${year}-${month}`}>
          <Heading3>
            {new Date(year, month).toLocaleString("default", {
              month: "long",
              year: "numeric"
            })}
          </Heading3>
          <DaysContainer>
            {monthDays.map((week, weekIndex) => (
              <React.Fragment key={weekIndex}>
                {week.map((dayData, dayIndex) => {
                  return dayData.date === null ? (
                    <DaySquare key={dayIndex} isSelected={false} />
                  ) : (
                    <DaySquare
                      key={dayIndex}
                      isSelected={
                        selectedDate
                          ? dayData.date.toDateString() ===
                            selectedDate.toDateString()
                          : false
                      }
                      onClick={() => handleDayClick(dayData)}
                    >
                      {dayData.image ? (
                        <img src={dayData.image} alt={`Day ${dayData.day}`} />
                      ) : (
                        <div>
                          <FaFishFins />
                        </div>
                      )}
                    </DaySquare>
                  );
                })}
              </React.Fragment>
            ))}
          </DaysContainer>
        </div>
      );
    }
  }

  return (
    <Container>
      <MonthPickerContainer>{allMonths}</MonthPickerContainer>
    </Container>
  );
};

export default MonthPicker;
