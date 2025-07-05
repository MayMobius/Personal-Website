// src/components/AboutTeaser.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './AboutTeaser.css';

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function AboutTeaser() {
  return (
    <section id="about" className="about-teaser">
      <div className="about-teaser-content">
        <motion.img
          className="about-avatar"
          src="/path/to/your/avatar.jpg"  // 换成你的头像路径
          alt="Avatar"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        />
        <motion.div
          className="about-text"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>About me</h2>
          <p>
            With a dynamic background spanning AI and natural language processing (NLP), 
            I have cultivated expertise in training diverse AI models, 
            including large language models, image recognition, 
            and speech recognition systems. Passionate about advancing technology, 
            I am committed to leveraging cutting-edge tools like TensorFlow, PyTorch, 
            and Hugging Face to drive innovation. 
            My mission is to contribute to impactful projects while fostering collaboration 
            that aligns with organizational goals and values. 
          </p>
          <p>
           At multiple firms, I developed high-performing AI models by optimizing hyperparameters, 
           ensuring model accuracy, and deploying scalable cloud solutions on AWS and Azure
           My contributions also included data preprocessing and augmentation for balanced datasets, 
           as well as collaborating with cross-functional teams to define model objectives, 
           consistently achieving over 95% training accuracy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
