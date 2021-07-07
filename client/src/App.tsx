import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AuthPage from "./components/Pages/AuthPage";
import DashboardPage from "./components/Pages/Dashboard";
import HivePage from "./components/Pages/HivePage";
// import HiveInfoPage from "./components/Pages/HiveInfoPage";
import Chart from "./components/Chart";
import "./App.css";
import HiveInfoPage from "./components/Pages/HiveInfoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={AuthPage} />
      <Route path="/dashboard" exact component={DashboardPage} />
      <Route path="/hive/:type" exact component={HivePage} />
      <Route path="/hive/id/:id" exact component={HiveInfoPage} />
    </BrowserRouter>
  );
};

export default App;
