import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { theme, sizes } from "./shared/styles";

import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import LoadingAnimation from "./components/LoadingAnimation";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import WritingPage from "./pages/Writing";
import Projects from "./pages/Projects";
import About from "./pages/About";

const App: React.FC = () => {
  // const [expanded, setExpanded] = useState(false);
  // const [showContent, setShowContent] = useState(false);

  // useEffect(() => {
  //   if (DO_ANIMATION) {
  //     setTimeout(() => {
  //       setExpanded(true);
  //     }, ANIMATION_TIME);
  //     setTimeout(() => {
  //       setShowContent(true);
  //     }, ANIMATION_TIME + 250);
  //   } else {
  //     setTimeout(() => {
  //       setShowContent(true);
  //     }, 250);
  //   }
  // }, []);

  return (
    <Router>
      {/* <ThemeProvider theme={theme}> */}
      <LoadingAnimation doAnimation={true} />
      <AppContainer showContent={true}>
        <Navbar />
        <ContentWrapper>
          {/* {"Actual Website Content ".repeat(1000)} */}
          <Routes>
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<WritingPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppContainer>
      {/* </ThemeProvider> */}
    </Router>
  );
};

export default App;

const AppContainer = styled.div<{ showContent: boolean }>`
  background-color: ${theme.colors.background.dark};
`;
//   visibility: ${({ showContent }) => (showContent ? "visible" : "hidden")};
//   opacity: ${({ showContent }) => (showContent ? 1 : 0)};
//   transition: opacity ${FADE_TIME}ms, visibility ${FADE_TIME}ms;
// `;

const ContentWrapper = styled.div`
  background-color: red;
  max-width: ${sizes.maxWidth};
  min-height: calc(100vh - ${sizes.navbar.height} - ${sizes.footer.height});
  padding: 0 20px;
  margin: auto;
`;
