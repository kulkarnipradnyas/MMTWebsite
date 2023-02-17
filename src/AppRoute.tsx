import { ErrorElement } from "./component/errorComponent";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultPage from "./component/defaultPage";
import Home from "./container/home";

const AppRoute = () => {
  const CartDetail = React.lazy(() => import("./component/cartDetails"));

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorElement />}>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/cartDetails" element={<CartDetail />} />
        </Route>
      </Routes>
    </>
  );
};
export default AppRoute;
