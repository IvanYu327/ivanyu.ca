import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import { theme } from "../styles";

const TETRIS_UNIT_SQUARE = 10;
const ANIMATION_TIME = 2000;
const FADE_TIME = 750;

const LoadingAnimation: React.FC<{
  doAnimation: boolean;
}> = ({ doAnimation }) => {
  const [expanded, setExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (doAnimation) {
      setTimeout(() => {
        setExpanded(true);
      }, ANIMATION_TIME);
      setTimeout(() => {
        setShowContent(true);
      }, ANIMATION_TIME + 250);
    } else {
      setTimeout(() => {
        setShowContent(true);
      }, 250);
    }
  }, []);

  return (
    <div>
      {doAnimation && (
        <>
          <TetrisContainer expanded={expanded}>
            <FilledTetris expanded={expanded} height={4} width={6} />
            <EmptyTetris expanded={expanded} height={4} width={1} />
            <FilledTetris expanded={expanded} height={4} width={3} />
            {/* <FilledTetris expanded={expanded} height={1} width={5} />
          <EmptyTetris expanded={expanded} height={1} width={3} />
          <FilledTetris expanded={expanded} height={1} width={2} />

          <FilledTetris expanded={expanded} height={1} width={6} />
          <EmptyTetris expanded={expanded} height={1} width={1} />
          <FilledTetris expanded={expanded} height={1} width={3} />

          <FilledTetris expanded={expanded} height={2} width={10} /> */}
          </TetrisContainer>
          <TetrisPiece expanded={expanded} />
        </>
      )}
    </div>
  );
};

export default LoadingAnimation;

const tetrisAnimation = keyframes`
  0% {
    transform: translateY(-60vh);
  }
  100% {
    transform: translateY(0);
  }
`;

const TetrisPiece = styled.div<{ expanded: boolean }>`
  width: ${TETRIS_UNIT_SQUARE + 2}px;
  height: ${TETRIS_UNIT_SQUARE * 4}px;
  position: fixed;
  top: calc(50vh - ${TETRIS_UNIT_SQUARE * 2}px);
  left: calc(50vw + ${TETRIS_UNIT_SQUARE - 1}px);
  background-color: ${theme.colors.tetris};
  // box-shadow: -1px 10px 10px -5px rgba(0, 0, 0, 0.3),
  //             -1px -10px 10px -5px rgba(0, 0, 0, 0.3);
  animation: ${tetrisAnimation} ${ANIMATION_TIME * 0.5}ms forwards;
  transform: translate(-50%, -50%)
  opacity: ${({ expanded }) => (expanded ? 0 : 1)};
  transition: all ${FADE_TIME}ms ease-out;
  display: ${({ expanded }) => (expanded ? "none" : "")};
  z-index: 999;

`;

const TetrisContainer = styled.div<{ expanded: boolean }>`
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  top: 50vh;
  left: 50vw;
  width: ${TETRIS_UNIT_SQUARE * 10}px;
  height: ${TETRIS_UNIT_SQUARE * 4}px;
  background-color: ${({ expanded }) => (expanded ? theme.colors.tetris : "")};
  border-color: none;
  transform: translate(-50%, -50%)
    scale(${({ expanded }) => (expanded ? 1.2 : 1)});
  opacity: ${({ expanded }) => (expanded ? 0 : 1)};
  transition: all ${FADE_TIME}ms ease-out;
`;

const FilledTetris = styled.div<{
  expanded: boolean;
  width: number;
  height: number;
}>`
  background-color: ${theme.colors.tetris};
  // box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);

  width: ${({ width }) => TETRIS_UNIT_SQUARE * width}px;
  height: ${({ height }) => TETRIS_UNIT_SQUARE * height}px;
  // display: ${({ expanded }) => (expanded ? "none" : "")};
`;

const EmptyTetris = styled.div<{
  expanded: boolean;
  width: number;
  height: number;
}>`
  background-color: ${({ expanded }) => (expanded ? theme.colors.tetris : "")};
  width: ${({ width }) => TETRIS_UNIT_SQUARE * width}px;
  height: ${({ height }) => TETRIS_UNIT_SQUARE * height}px;
  // display: ${({ expanded }) => (expanded ? "none" : "")};
`;
