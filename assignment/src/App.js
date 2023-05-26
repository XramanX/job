import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SignIn from "./components/signin/SignIn";
import "./index.css";
import Dashboard from "./components/dashboard/Dashboard";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact Component={SignIn} />
          <Route path="/dashboard/:accountId" Component={Dashboard} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
