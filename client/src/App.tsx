import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AuthPage from "./components/Pages/AuthPage";
import DashboardPage from "./components/Pages/Dashboard";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={AuthPage} />
      <Route path="/dashboard" exact component={DashboardPage} />
    </BrowserRouter>
  );
};

export default App;
