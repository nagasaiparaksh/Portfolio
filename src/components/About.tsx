import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-poppins text-primary dark:text-secondary mb-8">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-text/80 font-inter">
              I am a passionate Computer Science student specializing in Competitive Programming, Data Structures & Algorithms (DSA), and Web Development. My journey in tech began with a curiosity for problem-solving, evolving into a deep passion for building real-world solutions.</p>
              <p className="text-gray-700 dark:text-text/80 font-inter">
              I actively participate in hackathons, collaborating with like-minded individuals under time constraints. With a strong interest in AI/ML and Full-Stack Development, I continuously explore emerging technologies and embrace challenges to stay ahead in the ever-evolving tech landscape.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold font-poppins text-primary dark:text-text">Education</h3>
              <div className="border-l-2 border-secondary pl-4">
                <p className="text-gray-700 dark:text-text/80 font-inter">
                Bachelor of Technology in Computer Science, SRMIST
                </p>
                <p className="text-gray-600 dark:text-text/60 font-inter">
                  Current CGPA : 9.5
                </p>
                <p className="text-gray-600 dark:text-text/60 font-inter">
                  Expected Graduation: 2027
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;