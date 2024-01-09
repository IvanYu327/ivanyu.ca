import React, { useState } from "react";
import styled from "styled-components";

import MonthPicker from "./MonthPicker";

const CatchOfTheDay = () => {
  return (
    <div>
      <MonthPicker startYear={2023} startMonth={10} />
    </div>
  );
};

export default CatchOfTheDay;
