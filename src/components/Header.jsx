// src/components/Header.jsx

import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../ThemeProvider';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext); // theme = 'bright' or 'dark'
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化时检查一次

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 构建 header 的 class 列表
  const headerClasses = [
    'site-header',           // 基础样式
    theme,                   // bright or dark
    scrolled ? 'scrolled' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClasses}>
      <div className="container">
        <div className="logo">May Liu</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'bright' ? '🌙 Dark' : '☀ Bright'}
        </button>
      </div>
    </header>
  );
}
