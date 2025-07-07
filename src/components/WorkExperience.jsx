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
        <p> <b>•</b> Led annotation and preprocessing pipelines for LLM, computer vision, and speech recognition projects using Python, TensorFlow, and PyTorch.</p>
        <p> <b>•</b> Developed and executed data augmentation strategies (e.g., rotation, noise injection) to produce balanced, high-quality datasets.</p>
        <p> <b>•</b> Orchestrated CI/CD-driven deployments on AWS and Azure for scalable, low-latency inference.</p>
      </>
    )
  },
  {
    id: 2,
    role: 'Global Content & Localization Strategist',
    company: 'miHoYo Co., Ltd.',
    period: '2023.01 – 2023.06',
    description:
      <>
        <p> <b>•</b> Managed global partnerships with content creators to expand community reach, collaborating with marketing teams to localize content for multiple regions.</p>
        <p> <b>•</b> Oversaw submission reviews and brand consistency checks for overseas markets, ensuring alignment with company guidelines.</p>
        <p> <b>•</b> Led global marketing campaigns and community events, implementing data-driven strategies to increase user engagement by 20%.</p>
        <p> <b>•</b> Coordinated distribution of merchandise and in-game items, analyzing sales and engagement metrics to optimize future campaigns.</p>
      </>  },
  {
    id: 3,
    role: 'IT Network Monitoring & Maintenance Specialist',
    company: 'Hainan Walsoon New Material Technology Co., Ltd.',
    period: '2022.06 – 2022.12',
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
