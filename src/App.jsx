import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ArtRoom from './Pages/ArtRoom';
// import { SignIn, SignUp, SignInButton, } from "@clerk/clerk-react";
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Template from './Pages/Template';
import Account from './Pages/UserAccount';
import DashboardHome from './Pages/DashboardHome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} >
          {/* <Route index element={<Template />} />  */}
          <Route index element={<DashboardHome />} />    
          <Route path="/dashboard/template" element={<Template />} />
          <Route path="/dashboard/account" element={<Account />} />
        </Route>
        <Route path="/artRoom" element={<ArtRoom />} />
      </Routes>
    </Router>
  );
};

export default App;