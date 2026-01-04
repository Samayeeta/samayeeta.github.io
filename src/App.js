import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Activities from './Activities';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer';
import BackgroundCanvas from './BackgroundCanvas';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="app-container">
      {isDarkMode && <BackgroundCanvas />}
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="main-wrapper">
        <Hero />
        <About />
        <Experience />
        <Activities />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;