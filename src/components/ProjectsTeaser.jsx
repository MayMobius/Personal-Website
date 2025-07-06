// src/components/ProjectsTeaser.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './ProjectsTeaser.css';

const projects = [
  {
    title: '项目 A',
    description: '基于 React 的交互式仪表盘示例。',
    image: '/path/to/projectA.jpg',
    link: '#'
  },
  {
    title: '项目 B',
    description: '响应式企业官网模板，使用 Tailwind CSS。',
    image: '/path/to/projectB.jpg',
    link: '#'
  },
  {
    title: '项目 C',
    description: 'Canvas 动画与数据可视化结合的小游戏。',
    image: '/path/to/projectC.jpg',
    link: '#'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function ProjectsTeaser() {
  return (
    <section id="projects" className="projects-teaser">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
      >
        作品展示
      </motion.h2>
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projects.map((proj) => (
          <motion.a
            key={proj.title}
            className="project-card"
            href={proj.link}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(${proj.image})` }}
            />
            <div className="card-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
