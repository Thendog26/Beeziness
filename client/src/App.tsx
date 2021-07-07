import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AuthPage from "./components/Pages/AuthPage";
import DashboardPage from "./components/Pages/Dashboard";
import Chart from "./components/Chart";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={AuthPage} />
      <Route path="/dashboard" exact component={DashboardPage} />
      <Route path="/graph" exact component={Chart}/>
    </BrowserRouter>
  );
};

export default App;
