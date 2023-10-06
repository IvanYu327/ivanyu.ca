import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { ROUTES } from "./constants/routes";
import About from "./views/About";
import Home from "./views/Home";
import Work from "./views/Work";
import Writing from "./views/Writing";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContainer>
        <Navbar />
        <ContentContainer>
          <Routes>
            <Route path={ROUTES.MAIN} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.WORK} element={<Work />} />
            <Route path={ROUTES.WRITING} element={<Writing />} />

            <Route path="*" element={<div>not found</div>} />
          </Routes>
        </ContentContainer>

        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 0 20px 0 20px;
  min-width: 400px;
  max-width: 940px;
  margin: 0 auto;
  // background: black;
`;

const ContentContainer = styled.div`
  min-height: calc(100vh - 264px);
`;
