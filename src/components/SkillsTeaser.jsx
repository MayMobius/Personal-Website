// src/components/SkillsTeaser.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './SkillsTeaser.css';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Tailwind CSS', level: 70 },
];

export default function SkillsTeaser() {
  return (
    <section id="skills" className="skills-teaser">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <div key={skill.name} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar-bg">
              <motion.div
                className="skill-bar"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
            <span className="skill-level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
