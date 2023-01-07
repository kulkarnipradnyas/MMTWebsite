import React from "react";
import Home from "./container/home";
import { Route, Routes } from "react-router-dom";

const AppRoute = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </>
);
export default AppRoute;
