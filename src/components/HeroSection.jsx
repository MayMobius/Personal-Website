// src/components/HeroSection.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function HeroSection() {
  const [showExtras, setShowExtras] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 当页面滚动超过视窗高度的 10% 时显示副标题和按钮
      setShowExtras(window.scrollY > window.innerHeight * 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="visible"
        animate="visible"
      >
        {/* 主标题，一加载就显示 */}
        <motion.h1 variants={fadeUp} className="hero-title">
          Hi, I am May Liu
        </motion.h1>

        {/* 副标题，滚动到阈值后再显示 */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={showExtras ? 'visible' : 'hidden'}
          className="hero-subtitle"
        >
          Front-End Dev · Web Desgine · LLM Engeering
        </motion.h2>

        {/* CTA 按钮，同样滚动后再显示 */}
        <motion.button
          variants={fadeUp}
          initial="hidden"
          animate={showExtras ? 'visible' : 'hidden'}
          className="cta-button"
          onClick={() =>
            document
              .getElementById('projects')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          查看作品
        </motion.button>
      </motion.div>
    </section>
  );
}
