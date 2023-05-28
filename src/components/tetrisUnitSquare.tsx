import React from "react";

interface UnitSquareProps {
  color?: string;
}

const UnitSquare: React.FC<UnitSquareProps> = ({ color = "black" }) => {
  const unitSize = 50; // Width and height of the unit square box

  return (
    <div
      style={{
        width: unitSize + "px",
        height: unitSize + "px",
        backgroundColor: color,
      }}
    ></div>
  );
};

export default UnitSquare;
