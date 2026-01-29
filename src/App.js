import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
    
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Chargement du portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">
                <span className="logo-text">ML</span>
                <span className="logo-subtitle">Ingénieur & Développeur</span>
              </div>
              <div className="footer-links">
                <a href="#experience">Expérience</a>
                <a href="#projects">Projets</a>
                <a href="#skills">Compétences</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="footer-contact">
                <p>📞 +216 28 80 99 61</p>
                <p>✉️ Lakhalm300@gmail.com</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Mohamed Lakhal. Tous droits réservés.</p>
              <p>Développé avec React & ❤️</p>
            </div>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;