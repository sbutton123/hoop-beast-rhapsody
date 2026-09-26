// src/App.tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import RouteSeo from './components/RouteSeo'

// page imports
import Index from './pages/Index'
import Tutorials from './pages/Tutorials'
import Showcase from './pages/Showcase'
import Programs from './pages/Programs'
import Workouts from './pages/Workouts'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      {/* Per page title, description, canonical, and social tags */}
      <RouteSeo />

      {/* Navbar sits above everything */}
      <Navbar />

      {/* push the page content down below the sticky nav */}
      <main className="pt-8">
        <Routes>
          {/* exact home route */}
          <Route path="/" element={<Index />} />

          {/* each page gets its own path */}
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/showcase"    element={<Showcase />} />
          <Route path="/programs"    element={<Programs />} />
          <Route path="/workouts"    element={<Workouts />} />
          <Route path="/about"       element={<About />} />
          <Route path="/products"    element={<Products />} />
          <Route path="/contact"     element={<Contact />} />

          {/* catch‑all for any unmatched path */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
