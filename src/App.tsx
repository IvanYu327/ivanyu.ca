import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { ROUTES } from "./constants/routes";
import { PROJECTS } from "./copy/projects";
import { WRITING } from "./copy/writing";
import About from "./views/About";
import Article from "./views/Article";
import Home from "./views/Home";
import Work from "./views/Work";
import Writing from "./views/Writing";
import NotFound from "./views/NotFound";

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
            {PROJECTS.map((item) => {
              if (item.content) {
                return (
                  <Route
                    key={item.to}
                    path={`${item.to}`}
                    element={item.content}
                  />
                );
              }
            })}
            <Route path={ROUTES.WRITING} element={<Writing />} />
            {WRITING.map((item) => {
              if (item.content) {
                return (
                  <Route
                    key={item.to}
                    path={`${item.to}`}
                    element={item.content}
                  />
                );
              }
            })}
            {/* <Route path={`${ROUTES.WRITING}/*`} element={<Article />} /> */}
            <Route path="*" element={<NotFound />} />
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
  padding: 0 40px 0 20px;
  min-width: 300px;
  max-width: 640px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  min-height: calc(100vh - 264px);
`;
