// src/components/WorkExperience.jsx

import React from 'react';
import './WorkExperience.css';

const experiences = [
  {
    id: 1,
    role: '前端工程师',
    company: '公司 A',
    period: '2023.01 – 2024.03',
    description:
      '负责公司官网与后台管理系统的开发与维护，使用 React 和 TypeScript 优化页面性能。'
  },
  {
    id: 2,
    role: '交互设计师',
    company: '公司 B',
    period: '2021.06 – 2022.12',
    description:
      '基于 Figma 与 Framer Motion，设计并实现多款交互动效，提升用户体验。'
  },
  {
    id: 3,
    role: 'Web 开发实习生',
    company: '公司 C',
    period: '2020.07 – 2021.05',
    description:
      '参与多个项目的前端开发，以 HTML/CSS/JavaScript 完成页面切图与可视化模块。'
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="work-experience">
      <div className="exp-content">
        {/* 左侧永远粘在视口的标题 */}
        <div className="exp-header">
          Working<br/>Experience
        </div>
        {/* 右侧滚动切片 */}
        <div className="exp-slides">
          {experiences.map((exp) => (
            <div key={exp.id} className="exp-slide">
              <div className="exp-block">
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">{exp.company}</h4>
                <span className="exp-period">{exp.period}</span>
                <p className="exp-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
