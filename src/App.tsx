import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { keyframes, ThemeProvider } from "styled-components";

import { theme } from "./shared/theme";

import ErrorPage from "./pages/ErrorPage";

const DO_ANIMATION = true;
const TETRIS_UNIT_SQUARE = 10;
const ANIMATION_TIME = 2000;
const FADE_TIME = 750;

const App: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (DO_ANIMATION) {
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
    <Router>
      <ThemeProvider theme={theme}>
        <AppContainer>
          {DO_ANIMATION && (
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
          <ContentWrapper showContent={showContent}>
            {/* <Navbar /> */}
            {"Actual Website Content ".repeat(1000)}
            <Routes>
              <Route path="/*" element={<ErrorPage />} />
              {/* <Route path="/" element={<Home />} /> */}
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/work" element={<Work />} /> */}
              {/* <Route path="/:projectName" element={<ProjectPage />} /> */}
            </Routes>
            {/* <Footer /> */}
          </ContentWrapper>
        </AppContainer>
      </ThemeProvider>
    </Router>
  );
};

export default App;

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background};
`;

const ContentWrapper = styled.div<{ showContent: boolean }>`
  max-width: 1040px;
  margin: auto;
  visibility: ${({ showContent }) => (showContent ? "visible" : "hidden")};
  opacity: ${({ showContent }) => (showContent ? 1 : 0)};
  transition: opacity ${FADE_TIME}ms, visibility ${FADE_TIME}ms;
`;

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
  background-color: ${(props) => props.theme.tetrisColor};
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
  background-color: ${({ expanded }) =>
    expanded ? (props) => props.theme.tetrisColor : ""};
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
  background-color: ${(props) => props.theme.tetrisColor};
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
  background-color: ${({ expanded }) =>
    expanded ? (props) => props.theme.tetrisColor : ""};
  width: ${({ width }) => TETRIS_UNIT_SQUARE * width}px;
  height: ${({ height }) => TETRIS_UNIT_SQUARE * height}px;
  // display: ${({ expanded }) => (expanded ? "none" : "")};
`;
