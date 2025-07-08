// src/components/Header.jsx
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../ThemeProvider';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext); // bright 或 dark
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 拼 header class
  const headerClasses = `site-header ${theme} ${scrolled ? 'scrolled' : ''}`;

  return (
    <header className={headerClasses}>
      <div className="container">
        <div className="logo">May Liu</div>

        {/* 移动端汉堡图标 */}
        <div
          className="mobile-menu-icon"
          onClick={() => setIsMenuOpen(open => !open)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* 导航链接 */}
        <nav className={`nav-links${isMenuOpen ? ' open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>

         <button className="theme-toggle" onClick={toggleTheme}>
           <span className="tt-icon">
             {theme === 'bright' ? '🌙' : '☀'}
           </span>
           <span className="tt-label">
             {theme === 'bright' ? 'Dark' : 'Bright'}
           </span>
         </button>
      </div>
    </header>
  );
}
