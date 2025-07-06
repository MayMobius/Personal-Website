// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <span className="footer-text">
          © {new Date().getFullYear()} May Liu. All rights reserved.
        </span>
        <div className="footer-links">
          <a href="mailto:your.email@example.com">Email</a>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
