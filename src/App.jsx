import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Template from "./Pages/Template";
import Account from "./Pages/UserAccount";
import NotFound from "./Pages/PageNotFound";
import DashboardHome from "./Pages/DashboardHome";
import DummyHomePage from "./Pages/DummyHomePage";
import UserOnboardingPage from "./Pages/Onboarding";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/useronboarding" element={<UserOnboardingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/dummyhome" element={<DummyHomePage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route index element={<Template />} />  */}
          <Route index element={<DashboardHome />} />
          <Route path="/dashboard/template" element={<Template />} />
          <Route path="/dashboard/account" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
