import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './SkillsTeaser.css';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Tailwind CSS', level: 70 },
];

export default function SkillsTeaser() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
        isFirst.current = false;
        return;
    }
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [inView, controls]);

  // 定义标题与进度条的统一variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="skills" className="skills-teaser" ref={ref}>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        技能概览
      </motion.h2>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <div key={skill.name} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar-bg">
              <motion.div
                className="skill-bar"
                initial={{ width: 0 }}
                animate={controls}
                variants={{
                  hidden: { width: 0 },
                  visible: {
                    width: `${skill.level}%`,
                    transition: { duration: 0.8, ease: 'easeOut', delay: idx * 0.1 }
                  }
                }}
              />
            </div>
            <motion.span
              className="skill-level"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
            >
              {skill.level}%
            </motion.span>
          </div>
        ))}
      </div>
    </section>
  );
}
