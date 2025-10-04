import React from 'react';
import Login from './pages/Login';
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Home1 from './pages/Home1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
      </Routes>
    </Router>
  );
}

export default App;

