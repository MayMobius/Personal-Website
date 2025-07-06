// src/components/Education.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const educations = [
  {
    id: 1,
    institution: 'University of Wonderland',
    degree: 'Master of Science in Computer Science',
    period: '2022 – 2024',
    description: '专注于人机交互与前沿 Web 技术，发表了两篇关于可访问性和动画性能的论文。'
  },
  {
    id: 2,
    institution: 'Example Tech Institute',
    degree: 'Bachelor of Engineering in Software Engineering',
    period: '2018 – 2022',
    description: '主修软件架构与算法，担任校编程俱乐部副主席，组织多场黑客马拉松。'
  }
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <motion.h2
        className="education-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        教育经历
      </motion.h2>

      <div className="education-list">
        {educations.map((edu) => (
          <motion.div
            key={edu.id}
            className="education-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: edu.id * 0.1 }}
          >
            <h3 className="edu-degree">{edu.degree}</h3>
            <h4 className="edu-institution">{edu.institution}</h4>
            <span className="edu-period">{edu.period}</span>
            <p className="edu-desc">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
