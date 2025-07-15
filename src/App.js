import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './pages/Resume';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Skills />
            <Work />
            <Contact />
          </>
        } />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;