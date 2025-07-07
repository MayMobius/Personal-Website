// src/components/ProjectsTeaser.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './ProjectsTeaser.css';

const projects = [
  {
    title: 'Weather Image Recognition System Based on ResNet',
    description: 
    <> 
    <p>
        • Developed a Python-based image recognition application using a custom ResNet model in PyTorch to classify weather conditions from user-provided photos. 
    </p>
    <p>
        • Trained the ResNet model to achieve 97% accuracy on the training set and approximately 90% on a held-out test set.
    </p>
    </>
  },
  {
    title: 'Autonomous Driving Lane Prediction',
    description:
    <>
    <p>
        • Built a ResNet-18–based deep network with auxiliary segmentation heads; applied focal loss and gridded output to detect lane lines robustly across lighting and occlusions.
    </p>
    <p>
        • Preprocessed CULane dataset with 18 predefined row anchors and polynomial fitting; trained with SGD + momentum and a multi-step LR schedule for balanced speed and accuracy.
    </p>
    <p>
        • Engineered a real-time inference pipeline in C++/OpenCV leveraging TorchScript to overlay lane predictions on 1280×720 video streams
    </p>
    </>
  },
  {
    title: 'Credit Card Fraud Detection',
    description:
    <>
    <p>
        • Merged transaction and identity tables from the IEEE-CIS Kaggle dataset; cleaned null fields, one-hot encoded categorical features, and addressed severe class imbalance.
    </p>
    <p>
        • Developed and hyperparameter-tuned an XGBoost classifier following industry best practices to maximize ROC-AUC while minimizing false positives.
    </p>
    <p>
        • Employed ROC curve analysis and threshold optimization to select decision boundaries that improve true-positive fraud detection without degrading customer experience
    </p>
    </>
  },
  {
    title: 'High Precision Dynamic Positioning of Indoor Mobile Robot',
    description:
    <>
     <p> 
        • Designed a positioning system using a 1280x1024 camera and C++, incorporating camera calibration, mobile robot positioning, dynamic error compensation, and multi-camera field of view fusion via Homography matrix transformations.
     </p>
    </>
  },
  {
    title: 'Web Application Development of Phone Location based on TDoA',
    description:
    <> 
    <p>
        • Developed a high-precision phone location web application using JavaScript, React, MySQL, and Google Maps API. Implemented TDoA (Time Difference of Arrival) algorithms for accurate geolocation, achieving less than 10m error margin in test scenarios.
    </p>
    <p>
        • Ensured secure storage and handling of location data, applying best practices in encryption and access control. Utilized Node.js and Express.js on the backend to handle real-time data processing and API integrations.
    </p>
    </>
  },

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
        Projects Experience
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
