import React, { useState } from "react";
import styled from "styled-components";

interface Day {
  day: number;
  date: Date | null;
  image: string; // Replace with the actual image source type
}

interface MonthPickerProps {
  startYear: number;
  startMonth: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SelectedDate = styled.div`
  text-align: center;
  margin-bottom: 10px;

  img {
    max-width: 100px;
    max-height: 100px;
  }
`;

const MonthPickerContainer = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 10px;
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 50px);
  gap: 5px;
`;

const DaySquare = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: lightcyan;
  }

  img {
    max-width: 30px;
    max-height: 30px;
  }
`;

const MonthPicker: React.FC<MonthPickerProps> = ({ startYear, startMonth }) => {
  const [selectedDate, setSelectedDate] = useState<Day | null>(null);

  const handleDayClick = (dayData: Day) => {
    setSelectedDate(dayData);
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
      const dayData: Day = { day, date, image: "path/to/image.jpg" }; // Replace with actual image source

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
          <Heading>
            {new Date(year, month).toLocaleString("default", {
              month: "long",
              year: "numeric"
            })}
          </Heading>
          <DaysContainer>
            {monthDays.map((week, weekIndex) => (
              <React.Fragment key={weekIndex}>
                {week.map((dayData, dayIndex) =>
                  dayData.date === null ? (
                    <DaySquare key={dayIndex} />
                  ) : (
                    <DaySquare
                      key={dayIndex}
                      onClick={() => handleDayClick(dayData)}
                    >
                      <div>{dayData.day}</div>
                      <img src={dayData.image} alt={`Day ${dayData.day}`} />
                    </DaySquare>
                  )
                )}
              </React.Fragment>
            ))}
          </DaysContainer>
        </div>
      );
    }
  }

  return (
    <Container>
      <SelectedDate>
        {selectedDate && (
          <div>
            <img src={selectedDate.image} alt={`Day ${selectedDate.day}`} />
            <p>
              {selectedDate.date ? selectedDate.date.toDateString() : "no date"}
            </p>
          </div>
        )}
      </SelectedDate>
      <MonthPickerContainer>{allMonths}</MonthPickerContainer>
    </Container>
  );
};

export default MonthPicker;