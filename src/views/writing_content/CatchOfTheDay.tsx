import React, { useState } from "react";
import styled from "styled-components";

import MonthPicker from "./MonthPicker";

const CatchOfTheDay = () => {
  return (
    <div>
      <MonthPicker year={2024} month={0} />
    </div>
  );
};

export default CatchOfTheDay;
