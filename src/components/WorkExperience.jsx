// src/components/WorkExperience.jsx

import React from 'react';
import './WorkExperience.css';

const experiences = [
  {
    id: 1,
    role: 'AI Data Annotation (pt)',
    company: 'Outlier&CrowdGen&Appen',
    period: '2024.05 – 2025.03',
        description: (
      <>
        <p> <b>•</b> Participated in training a wide range of AI models, including Large Language Models (LLMs), image recognition, and speech recognition systems.</p>
        <p> <b>•</b> Collaborated with ML engineers to integrate labeled datasets into training pipelines, providing feedback on data quality and format requirements.</p>
        <p> <b>•</b> Conducted rigorous quality assurance, identifying and correcting annotation errors to maintain more than 98% labeling accuracy.</p>
      </>
    )
  },
  {
    id: 2,
    role: 'IT Network Monitoring & Maintenance Specialist',
    company: 'Hainan Walsoon New Material Technology Co., Ltd.',
    period: '2022.06 – 2023.06',
    description:
      <>
        <p> <b>•</b> Monitored internal LAN, WAN, and VPN health using SNMP-based tools and network analyzers to ensure 24/7 availability.</p>
        <p> <b>•</b> Managed configuration, firmware updates, and patching for core network devices (routers, switches, firewalls).</p>
        <p> <b>•</b> Diagnosed and resolved connectivity and performance issues, minimizing downtime and meeting SLA targets.</p>
        <p> <b>•</b> Implemented network security policies—including access controls and intrusion detection—and conducted regular vulnerability assessments.</p>
        <p> <b>•</b> Maintained accurate network documentation: topology diagrams, device inventories, and standard operating procedures</p>
      </>  }
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
