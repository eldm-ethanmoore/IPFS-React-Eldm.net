import React from 'react';
import App from './App'
import Blog from './Blog';
import Contact from './Contact';
import Projects from './Projects';
import Intro from './Intro';
import Error from './Error';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Link, useNavigate } from 'react-router-dom'; 
export default (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
);