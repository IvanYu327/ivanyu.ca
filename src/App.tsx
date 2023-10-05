import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import { ROUTES } from "./constants/routes";
import Home from "./views/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={ROUTES.MAIN} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<div>about</div>} />

        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
