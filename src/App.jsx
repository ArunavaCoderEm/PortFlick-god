import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route ("/") points to Home.jsx */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;