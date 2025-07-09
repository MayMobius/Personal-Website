// src/components/Education.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const educations = [
  {
    id: 1,
    institution: 'Lakehead University',
    logo: '/images/LU_logo.png',
    degree: 'Master of Science in Computer Science',
    period: '2023 – 2024',
    description: 'Major Courses: Big Data, Computer Vision & Image Analysis, Pattern Recognition, Data Science, AI for Autonomous Systems, Mobile Programming, etc.'
},
  {
    id: 2,
    institution: 'University of Wisconsin-Eau Claire',
    logo: '/images/uwec_logo.png',
    degree: 'Bachelor of Arts & Science in Computer Science',
    period: '2020 – 2022',
    description: 'Major Courses: Linear Algebra, Computer Programming-C Language, Data Structures & Algorithms, Digital Logic & Systems, Operating System, etc.'
  }
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <motion.h2
        className="education-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Education
      </motion.h2>

      <div className="education-list">
        {educations.map((edu) => (
          <motion.div
            key={edu.id}
            className="education-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: edu.id * 0.1 }}
          >
            <img
              src={edu.logo}
              alt={`${edu.institution} logo`}
              className="edu-logo"
            />
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
