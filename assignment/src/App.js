import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SignIn from "./components/signin/SignIn";
import "./index.css";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact Component={SignIn} />
          <Route path="/dashboard/:accountId" Component={Dashboard} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
