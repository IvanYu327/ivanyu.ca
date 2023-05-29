import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const TETRIS_UNIT_SQUARE = 20;
const ANIMATION_TIME = 1500;

const App: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExpanded(true);
    }, ANIMATION_TIME);
    setTimeout(() => {
      setShowContent(true);
    }, ANIMATION_TIME + 500);
  }, []);

  return (
    <div>
      <TetrisContainer expanded={expanded}>
        <Rectangle expanded={expanded} height={4} width={6} color="black" />
        <Rectangle expanded={expanded} height={4} width={1} color="white" />
        <Rectangle expanded={expanded} height={4} width={3} color="black" />
      </TetrisContainer>
      <TetrisPiece expanded={expanded} />
      <WebsiteContent showContent={showContent}>
        Actual Website Content
      </WebsiteContent>
    </div>
  );
};

export default App;

const tetrisAnimation = keyframes`
  0% {
    transform: translateY(-60vh);
  }
  100% {
    transform: translateY(0);
  }
`;

const TetrisPiece = styled.div<{ expanded: boolean }>`
  width: ${TETRIS_UNIT_SQUARE}px;
  height: ${TETRIS_UNIT_SQUARE * 4}px;
  position: absolute;
  top: calc(50vh - ${TETRIS_UNIT_SQUARE * 2}px);
  left: calc(50vw + ${TETRIS_UNIT_SQUARE}px);
  background-color: black;
  animation: ${tetrisAnimation} ${ANIMATION_TIME * 0.5}ms forwards;
  transform: translate(-50%, -50%)
  opacity: ${({ expanded }) => (expanded ? 0 : 1)};
  transition: all ${ANIMATION_TIME}ms ease-out;
  display: ${({ expanded }) => (expanded ? "none" : "")};
`;

const TetrisContainer = styled.div<{ expanded: boolean }>`
  width: ${TETRIS_UNIT_SQUARE * 10}px;
  height: ${TETRIS_UNIT_SQUARE * 4}px;
  position: absolute;
  display: flex;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%)
    scale(${({ expanded }) => (expanded ? 1.4 : 1)});
  opacity: ${({ expanded }) => (expanded ? 0 : 1)};
  transition: all ${ANIMATION_TIME}ms ease-out;
  background-color: ${({ expanded }) => (expanded ? "black" : "")};
`;

const Rectangle = styled.div<{
  expanded: boolean;
  width: number;
  height: number;
  color: string;
}>`
  background-color: ${({ expanded, color }) => (expanded ? "black" : color)};
  width: ${({ width }) => TETRIS_UNIT_SQUARE * width}px;
  height: ${({ height }) => TETRIS_UNIT_SQUARE * height}px;
`;

const WebsiteContent = styled.div<{ showContent: boolean }>`
  opacity: ${({ showContent }) => (showContent ? 1 : 0)};
  transition: opacity 0.5s;
`;
