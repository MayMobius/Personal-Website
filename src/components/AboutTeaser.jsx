// src/components/AboutTeaser.jsx

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './AboutTeaser.css';

const slideInLeft = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};
const slideInRight = {
  hidden: { opacity: 0, x: '100vw' },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function AboutTeaser() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controlsL = useAnimation();
  const controlsR = useAnimation();
  // 1. 初次挂载标记
  const isFirst = useRef(true);

  useEffect(() => {
    // 如果是首次挂载，就跳过这次 inView 触发
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    // 2. 后续 inView 变化才真正触发动画
    if (inView) {
      controlsL.start('visible');
      controlsR.start('visible');
    } else {
      controlsL.start('hidden');
      controlsR.start('hidden');
    }
  }, [inView, controlsL, controlsR]);

  return (
    <section id="about" className="about-teaser" ref={ref}>
      <div className="about-teaser-content">
        <motion.img
          className="about-avatar"
          src="/path/to/your/avatar.jpg"
          alt="Avatar"
          variants={slideInLeft}
          initial="hidden"
          animate={controlsL}
        />
        <motion.div
          className="about-text"
          variants={slideInRight}
          initial="hidden"
          animate={controlsR}
        >
          <h2>关于我</h2>
          <p>……这里是你的简介……</p>
        </motion.div>
      </div>
    </section>
  );
}
