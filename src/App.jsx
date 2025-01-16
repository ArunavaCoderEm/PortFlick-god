import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ArtRoom from './Pages/ArtRoom';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route ("/") points to Home.jsx */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artRoom" element={<ArtRoom />} />
      </Routes>
    </Router>
  );
};

export default App;