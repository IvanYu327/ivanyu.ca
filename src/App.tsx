import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { theme, sizes } from "./styles";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingAnimation from "./components/LoadingAnimation";

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
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/work" element={<Work />} /> */}
            {/* <Route path="/:projectName" element={<ProjectPage />} /> */}
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
