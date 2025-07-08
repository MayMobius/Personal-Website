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
    // 后续 inView 变化触发动画
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
          src={`${process.env.PUBLIC_URL}/images/IMG_5677.JPG`}
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
          <h2>About me</h2>
          <p>
            I’m Yiming (May) Liu, a Master of Science in Computer Science graduate from Lakehead University who brings together deep learning, front-end craftsmanship, and a dash of creative hands on flair. 
            My journey into tech began after earning my Bachelor of Arts & Science in Computer Science from the University of Wisconsin–Eau Claire, when I joined Hainan Walsoon New Material Technology as an IT Network Monitoring & Maintenance Specialist. 
            There, I ensured 24/7 availability across LAN, WAN, and VPN connections, managed firmware updates and patching on core routers and firewalls, and documented network topologies and procedures to keep operations running smoothly.
          </p>
          <p>
            Eager to blend technical skills with global outreach, I next moved to Shanghai to work with miHoYo Co., Ltd. as a Global Content & Localization Strategist. 
            In that role I managed partnerships with content/freelancer creators, oversaw brand-consistency checks for overseas markets, and led data-driven marketing campaigns and community events that boosted user engagement by 20%. 
            Most recently, I put my AI skill set to work as an AI Data Annotation Specialist with Outlier, 
            CrowdGen & Appen—designing annotation pipelines for large language, vision, and speech models, applying data augmentation strategies for balanced datasets, and orchestrating scalable, low latency deployments on AWS and Azure.
          </p>
          <p>
            On the technical side, I’m fluent in Python (PyTorch, TensorFlow), JavaScript/TypeScript (React, Vue, Next.js), and comfortable building end-to-end solutions with Node.js, Docker, and cloud services. 
            Whether I’m architecting a phone-geolocation web app with Google Maps API or training a custom ResNet to recognize weather patterns, I thrive on solving complex problems and turning research into production.
          </p>
          <p>
           When I step away from the keyboard, you’ll find me in my workshop 3D printing prototypes or assembling scale models. There’s nothing like watching a digital design become tangible. 
           I recharge by cycling scenic routes, pushing my limits on rock climbing walls, and jumping over fresh powder on snowboard. 
          </p>
          <p>
            If you’re looking for a curious, driven developer who blends AI research, front-end finesse, and real world creativity, let’s connect. I’d love to explore how we can build something great together.

          </p>
        </motion.div>
      </div>
    </section>
  );
}
