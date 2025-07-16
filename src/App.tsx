// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Tutorials from '@/pages/Tutorials';
import Showcase from '@/pages/Showcase';
import Programs from '@/pages/Programs';
import Workouts from '@/pages/Workouts';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Contact from '@/pages/Contact'; // new page

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 fallback could go here */}
      </Routes>
    </Router>
  );
};

export default App;
