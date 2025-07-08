// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <section id="contact" className="contact">
    <footer className="site-footer">
      <div className="footer-container">
        <span className="footer-text">
          © {new Date().getFullYear()} May Liu. All rights reserved.
        </span>
        <div className="footer-links">
          <a href="mailto:maymobius23@gmail.com">Email</a>
          <a
            href="https://github.com/MayMobius"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yiming-may-liu-63083a316"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
    </section>
  );
}
