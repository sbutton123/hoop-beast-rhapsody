// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

// import all of your pages:
import Index from './pages/Index';
import Tutorials from './pages/Tutorials';
import Showcase from './pages/Showcase';
import Programs from './pages/Programs';
import Workouts from './pages/Workouts';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* nav sits above everything */}
      <Navbar />

      {/* your page content */}
      <main className="pt-16"> {/* pt-16 to push it below the sticky navbar */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
