// src/components/SkillsTeaser.jsx

import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiOpencv,
  SiDocker,
  SiAmazonwebservices,
  SiGit,
  SiGithubactions,
  SiJenkins,
  SiBlender
} from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import { GrVmMaintenance } from "react-icons/gr";
import { FaTools, FaNetworkWired } from 'react-icons/fa';
import './SkillsTeaser.css';

const skills = [
  { icon: <SiPython />,           name: 'Python' },
  { icon: <SiNumpy />,            name: 'Numpy'},
  { icon: <SiPandas />,           name: 'Pandas'},
  { icon: <SiScikitlearn />,      name: 'Scikitlearn'},
  { icon: <SiTypescript />,       name: 'Typescript'},
  { icon: <SiJavascript />,       name: 'JavaScript' },
  { icon: <SiCplusplus />,        name: 'C / C++' },
  { icon: <SiReact />,            name: 'React.js' },
  { icon: <SiNextdotjs />,        name: 'Next.js' },
  { icon: <SiRedux />,            name: 'Redux' },
  { icon: <SiHtml5 />,            name: 'HTML5' },
  { icon: <SiCss3 />,             name: 'CSS3 (Sass/SCSS)' },
  { icon: <SiNodedotjs />,        name: 'Node.js' },
  { icon: <SiExpress />,          name: 'Express.js' },
  { icon: <SiMysql />,            name: 'MySQL' },
  { icon: <SiMongodb />,          name: 'MongoDB' },
  { icon: <SiTensorflow />,       name: 'TensorFlow' },
  { icon: <SiPytorch />,          name: 'PyTorch' },
  { icon: <SiKeras />,            name: 'Keras' },
  { icon: <SiOpencv />,           name: 'OpenCV' },
  { icon: <FaTools />,            name: 'ResNet' },
  { icon: <SiDocker />,           name: 'Docker' },
  { icon: <SiAmazonwebservices />,name: 'AWS (EC2, S3)' },
  { icon: <VscAzure />,           name: 'Azure' },
  { icon: <SiGit />,              name: 'Git' },
  { icon: <SiGithubactions />,    name: 'GitHub Actions' },
  { icon: <SiJenkins />,          name: 'Jenkins' },
  { icon: <GrVmMaintenance />,    name: 'Maintenance' },
  { icon: <FaNetworkWired />,     name: 'Network Monitoring'},
  { icon: <SiBlender />,          name: 'Blender' }

];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120 } }
};

export default function SkillsTeaser() {
  return (
    <section id="skills" className="skills-teaser">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {skills.map((s, i) => (
          <motion.div key={i} className="skill-card" variants={item}>
            <div className="skill-icon">{s.icon}</div>
            <div className="skill-name">{s.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
