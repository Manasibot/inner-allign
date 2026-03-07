import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Forest from './components/Forest';
import WhoFor from './components/WhoFor';
import Experience from './components/Experience';
import Cohort from './components/Cohort';
import FinalCTA from './components/FinalCTA';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App">
      <Hero />
      <Forest />
      <WhoFor />
      <Experience />
      <Cohort />
      <FinalCTA />

      <footer className="footer">
        <p>© 2026 THE INNER ALIGNMENT EXPERIENCE</p>
      </footer>
    </div>
  );
}

export default App;
