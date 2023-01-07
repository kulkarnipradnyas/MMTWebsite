import React from "react";

import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import store from "./src/store/store";

import ErrorBoundary from "./src/component/errorBoundary";
import Loader from "./src/component/loader";
import AppRoute from "./src/AppRoute";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <React.Suspense fallback={<Loader />}>
            <Router>
              <AppRoute />
            </Router>
          </React.Suspense>
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
