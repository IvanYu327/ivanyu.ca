import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const tetrisAnimation = keyframes`
  0% {
    transform: translateY(-60vh);
  }
  100% {
    transform: translateY(0);
  }
`;

const AppWrapper = styled.div`
  position: relative;
`;

const TetrisPiece = styled.div<{ expanded: boolean }>`
  width: 10px;
  height: 40px;
  position: absolute;
  top: calc(50vh - 20px);
  left: calc(50vw + 10px);
  background-color: black;
  animation: ${tetrisAnimation} 1s forwards;
  transform: translate(-50%, -50%)
    scale(${({ expanded }) => (expanded ? 1.4 : 1)});
  opacity: ${({ expanded }) => (expanded ? 0 : 1)};
  transition: all 1s ease-out;
  background-color: ${({ expanded }) => (expanded ? "white" : "black")};
`;

const TetrisContainer = styled.div<{ expanded: boolean }>`
  width: 100px;
  height: 40px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%)
    scale(${({ expanded }) => (expanded ? 1.4 : 1)});
  opacity: ${({ expanded }) => (expanded ? 0 : 1)};
  transition: all 1s ease-out;
  background-color: ${({ expanded }) => (expanded ? "black" : "")};
`;

const Rectangle = styled.div<{
  expanded: boolean;
  width: number;
  height: number;
  color: string;
}>`
  background-color: ${({ expanded, color }) => (expanded ? "black" : color)};
  width: ${({ width }) => 10 * width}px;
  height: ${({ height }) => 10 * height}px;
`;

const WebsiteContent = styled.div<{ expanded: boolean }>`
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  transition: opacity 0.5s;
`;

const App: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExpanded(true);
    }, 2000);
  }, []);

  return (
    <AppWrapper>
      <TetrisContainer expanded={expanded}>
        <Rectangle expanded={expanded} height={4} width={6} color="black" />
        <Rectangle expanded={expanded} height={4} width={1} color="white" />
        <Rectangle expanded={expanded} height={4} width={3} color="black" />
      </TetrisContainer>
      <TetrisPiece expanded={expanded} />
      <WebsiteContent expanded={expanded}>
        Actual Website Content
      </WebsiteContent>
    </AppWrapper>
  );
};

export default App;
