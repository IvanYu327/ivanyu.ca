import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import { ROUTES } from "./constants/routes";
import Home from "./views/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path={ROUTES.MAIN} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<div>about</div>} />

          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  background: black;
  padding: 0 20px 0 20px;
  min-width: 400px;
  max-width: 940px;
  margin: 0 auto;
`;
