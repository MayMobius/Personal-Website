import React from 'react';
import ThemeProvider from './ThemeProvider';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutTeaser from './components/AboutTeaser';
import SkillsTeaser from './components/SkillsTeaser';
import ProjectsTeaser from './components/ProjectsTeaser';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutTeaser />
        <SkillsTeaser />
        {/* 后续会加 AboutTeaser、SkillsTeaser 等 */}
      </main>
    </>
  );
}

export default App;
