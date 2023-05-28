import React from "react";
import UnitSquare from "./tetrisUnitSquare";
import "./TPiece.css";

const TPiece: React.FC = () => {
  const unitSize = 50; // Width of each unit square

  return (
    <div
      className="fading-div"
      style={{ position: "absolute", top: "100px", left: "50px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: unitSize * 2 + "px", // Total width of the T-piece
          height: unitSize + "px", // Total height of the T-piece
        }}
      >
        <UnitSquare />
        <UnitSquare color="white" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: unitSize * 2 + "px", // Total width of the T-piece
          height: unitSize + "px", // Total height of the T-piece
        }}
      >
        <UnitSquare />
        <UnitSquare />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: unitSize * 2 + "px", // Total width of the T-piece
          height: unitSize + "px", // Total height of the T-piece
        }}
      >
        <UnitSquare />
        <UnitSquare color="white" />
      </div>
    </div>
  );
};

export default TPiece;
